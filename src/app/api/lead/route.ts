import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, data } = body;

        console.log(`Received lead submission [${type}]:`, data);

        // Retrieve Resend configuration from environment variables
        const resendApiKey = process.env.RESEND_API_KEY;
        const resendFrom = process.env.RESEND_FROM || 'onboarding@resend.dev';
        const leadTargetEmail = process.env.LEAD_EMAIL || 'info@lasarz.com';

        if (!resendApiKey) {
            console.error('❌ RESEND_API_KEY is not configured in environment variables.');
            return NextResponse.json(
                { success: false, error: 'Resend API-Schlüssel ist nicht konfiguriert.' },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);

        // Construct HTML and Text email bodies based on form type
        let subject = '';
        let emailHtml = '';
        let emailText = '';

        if (type === 'contact_funnel') {
            subject = `🔥 Neuer Lead: Lead-Funnel Immobilienbewertung`;
            emailText = `
Neuer Lead vom Lead-Funnel:
------------------------------------------
Vorname: ${data.vorname || '-'}
Nachname: ${data.nachname || '-'}
E-Mail: ${data.email || '-'}
Telefon: ${data.telefon || '-'}

Angaben zur Immobilie:
Anlass: ${data.anlass || '-'}
Gewünschte Leistung: ${data.gutachten || '-'}
Objekttyp: ${data.typ || '-'}
PLZ / Ort: ${data.plz || '-'} ${data.ort || '-'}
Wohn-/Nutzfläche: ${data.flaeche || '-'} m²
Baujahr: ${data.baujahr || '-'}

Zusätzliche Nachricht:
${data.nachricht || 'Keine'}
            `.trim();

            emailHtml = `
                <h2>🔥 Neuer Lead vom Lead-Funnel</h2>
                <p>Es wurde eine neue Bewertungsanfrage über den Lead-Funnel gestellt.</p>
                <table style="width:100%; border-collapse:collapse; font-family:sans-serif; margin-bottom: 20px;">
                    <tr style="background:#f2f2f2;"><th colspan="2" style="padding:10px; text-align:left; border-bottom:2px solid #ccc;">Kontaktdaten</th></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee; width:200px;"><strong>Name:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.vorname || ''} ${data.nachname || ''}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>E-Mail:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Telefon:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="tel:${data.telefon}">${data.telefon || '-'}</a></td></tr>
                    
                    <tr style="background:#f2f2f2;"><th colspan="2" style="padding:10px; text-align:left; border-bottom:2px solid #ccc; margin-top:15px;">Immobiliendetails</th></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Anlass:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.anlass || '-'}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Gewünschtes Gutachten:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.gutachten || '-'}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Objekttyp:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.typ || '-'}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Adresse:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.plz || ''} ${data.ort || ''}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Wohnfläche:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.flaeche || '-'} m²</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Baujahr:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.baujahr || '-'}</td></tr>
                </table>
                <h3>Nachricht:</h3>
                <p style="white-space:pre-wrap; background:#f9f9f9; padding:15px; border-left:4px solid #1a758d; font-style:italic;">${data.nachricht || 'Keine Nachricht hinterlassen.'}</p>
            `;
        } else if (type === 'contact_modal') {
            subject = `📞 Rückrufanfrage / Kontaktanfrage (Pop-up)`;
            emailText = `
Neue Rückrufanfrage über das Kontaktformular (Call-Button):
------------------------------------------
Name: ${data.vorname || ''} ${data.nachname || ''}
E-Mail: ${data.email || '-'}
Telefon: ${data.telefon || '-'}
Grund der Anfrage: ${data.reason || '-'}

Nachricht:
${data.nachricht || 'Keine'}
            `.trim();

            emailHtml = `
                <h2>📞 Neue Anfrage (Kontakt-Modal)</h2>
                <table style="width:100%; border-collapse:collapse; font-family:sans-serif; margin-bottom: 20px;">
                    <tr><td style="padding:8px; border-bottom:1px solid #eee; width:200px;"><strong>Name:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.vorname || ''} ${data.nachname || ''}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>E-Mail:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Telefon:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="tel:${data.telefon}">${data.telefon || '-'}</a></td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Anlass:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.reason || '-'}</td></tr>
                </table>
                <h3>Nachricht:</h3>
                <p style="white-space:pre-wrap; background:#f9f9f9; padding:15px; border-left:4px solid #1a758d; font-style:italic;">${data.nachricht || 'Keine Nachricht hinterlassen.'}</p>
            `;
        } else if (type === 'chatbot') {
            subject = `💬 Chatbot Lead: Rückruf angefordert`;
            emailText = `
Neuer Rückrufwunsch über den Live-Chatbot:
------------------------------------------
Name: ${data.name || '-'}
Telefon: ${data.phone || '-'}
Nachrich/Kontext: ${data.message || 'Rückrufwunsch ohne spezifische Nachricht.'}
            `.trim();

            emailHtml = `
                <h2>💬 Neuer Lead via Chatbot</h2>
                <p>Ein Besucher hat im Chatbot um Rückruf gebeten:</p>
                <table style="width:100%; border-collapse:collapse; font-family:sans-serif; margin-bottom: 20px;">
                    <tr><td style="padding:8px; border-bottom:1px solid #eee; width:200px;"><strong>Name:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.name || '-'}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Telefon:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="tel:${data.phone}">${data.phone || '-'}</a></td></tr>
                </table>
                <h3>Letzte Nachricht / Kontext im Chat:</h3>
                <p style="white-space:pre-wrap; background:#f9f9f9; padding:15px; border-left:4px solid #1a758d; font-style:italic;">${data.message || 'Kein weiterer Kontext vorhanden.'}</p>
            `;
        } else if (type === 'appointment') {
            subject = `📅 Neue Terminanfrage: ${data.service}`;
            emailText = `
Neue Terminanfrage über die Website:
------------------------------------------
Name: ${data.name || '-'}
E-Mail: ${data.email || '-'}
Telefon: ${data.telefon || '-'}
Dienstleistung: ${data.service || '-'}
Datum: ${data.date || '-'}
Uhrzeit: ${data.time || '-'}
Adresse der Immobilie: ${data.address || '-'}
            `.trim();

            emailHtml = `
                <h2>📅 Neue Terminanfrage</h2>
                <table style="width:100%; border-collapse:collapse; font-family:sans-serif; margin-bottom: 20px;">
                    <tr><td style="padding:8px; border-bottom:1px solid #eee; width:200px;"><strong>Name:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.name || '-'}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>E-Mail:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email || '-'}</a></td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Telefon:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="tel:${data.telefon}">${data.telefon || '-'}</a></td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Dienstleistung:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.service || '-'}</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Datum / Uhrzeit:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.date || '-'} um ${data.time || '-'} Uhr</td></tr>
                    <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Immobilienadresse:</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${data.address || '-'}</td></tr>
                </table>
            `;
        } else {
            subject = `📬 Neue Anfrage von der Website`;
            emailText = JSON.stringify(data, null, 2);
            emailHtml = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        }

        // Extract customer email to set reply_to
        const replyToEmail = data.email || data.mail || '';

        // Send the mail via Resend
        const { data: resendData, error: resendError } = await resend.emails.send({
            from: resendFrom,
            to: leadTargetEmail,
            subject: subject,
            text: emailText,
            html: emailHtml,
            ...(replyToEmail ? { reply_to: replyToEmail } : {})
        });

        if (resendError) {
            console.error('❌ Resend email sending error:', resendError);
            return NextResponse.json(
                { success: false, error: resendError.message || 'Fehler beim Senden der E-Mail über Resend.' },
                { status: 500 }
            );
        }

        console.log(`Email sent successfully for lead type [${type}] via Resend to ${leadTargetEmail}. ID: ${resendData?.id}`);
        return NextResponse.json({ success: true, message: 'Lead-E-Mail erfolgreich gesendet.', messageId: resendData?.id });

    } catch (error: any) {
        console.error('Error in lead API route:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Interner Serverfehler beim Senden des Leads.' },
            { status: 500 }
        );
    }
}
