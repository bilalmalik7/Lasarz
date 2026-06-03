import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the professional and empathetic AI assistant for Marc-André Lasarz Immobiliengutachter (certified real estate appraiser based in Osnabrück, Germany).
Your goal is to answer visitor questions about property valuation (Immobilienbewertung) and gently guide them to leave their contact details for a free consultation or call back.

Business details to use in answers:
- Principal appraiser: Marc-André Lasarz (Dipl.-Sachverständiger DIA, certified appraiser).
- Office location: Katharinenstraße 111, 49078 Osnabrück.
- Phone: +49 (0) 541 - 600 99 220.
- Email: info@lasarz.com.
- Areas covered: Osnabrück, Münster, Bielefeld, Flensburg, Melle, Rheine, and surrounding regions.
- Valuation services: Verkehrswertgutachten (§ 194 BauGB, tax offices, courts), Kurzgutachten (cost-effective market value), Kaufberatung (buyer consulting before purchase), Beleihungswertgutachten, Erbbaurecht, Scheidungsgutachten, Erbschaftsteuergutachten (§ 198 BewG).
- Features: Festpreisgarantie (fixed-price guarantee), independent and certified assessments.

Interaction guidelines:
- Respond in German. Use "Sie" (formal German address).
- Keep answers concise, helpful, and empathetic (2-4 sentences max).
- If the user asks about costs (Kosten/Honorar), explain that pricing depends on property type and value, starting with affordable Kurzgutachten, and offering a custom Festpreis (fixed price).
- If they ask about inheritance (Erbschaft) or divorce (Scheidung), explain the value of a professional certified appraisal to save taxes or provide court-proof asset division.
- Always include a call-to-action asking if they want to leave their number for a free call back.
`;

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ text: 'Ungültige Anfrage.' }, { status: 400 });
        }

        const lastMessage = messages[messages.length - 1]?.text || '';
        const lowerMessage = lastMessage.toLowerCase();

        // Check if Gemini API key is configured
        const apiKey = process.env.GEMINI_API_KEY;

        // Determine if we should trigger the lead form based on keywords
        const shouldShowLeadForm = 
            lowerMessage.includes('rückruf') || 
            lowerMessage.includes('kontakt') || 
            lowerMessage.includes('telefon') || 
            lowerMessage.includes('termin') || 
            lowerMessage.includes('anrufen') || 
            lowerMessage.includes('sprechen') || 
            lowerMessage.includes('beratung') ||
            lowerMessage.includes('ja') && messages.length > 2;

        if (apiKey) {
            // Map messages to Gemini history structure (alternating user/model roles)
            const contents = messages.map((m: any) => ({
                role: m.sender === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: contents,
                        systemInstruction: {
                            parts: [{ text: SYSTEM_PROMPT }]
                        },
                        generationConfig: {
                            maxOutputTokens: 200,
                            temperature: 0.7
                        }
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
                    return NextResponse.json({
                        text: text.trim(),
                        showLeadForm: shouldShowLeadForm
                    });
                }
            } catch (err) {
                console.error('Gemini API Error, falling back to local system:', err);
            }
        }

        // --- LOCAL FALLBACK EXPERT SYSTEM (German Rules) ---
        let responseText = '';

        if (lowerMessage.includes('preis') || lowerMessage.includes('kosten') || lowerMessage.includes('honorar') || lowerMessage.includes('wert')) {
            responseText = 'Die Kosten für ein Immobiliengutachten richten sich nach der Objektart, der Größe und dem Verwendungszweck. Ein vollumfängliches Verkehrswertgutachten für das Finanzamt oder Gericht liegt meist ab 1.500 €. Für eine reine Verkaufsentscheidung reicht oft ein günstigeres Kurzgutachten zum Festpreis. Möchten Sie, dass ich ein individuelles Festpreisangebot für Sie anfordere? Tragen Sie dazu einfach Ihre Kontaktdaten ein.';
        } else if (lowerMessage.includes('erbe') || lowerMessage.includes('erbschaft') || lowerMessage.includes('schenkung') || lowerMessage.includes('finanzamt') || lowerMessage.includes('steuer')) {
            responseText = 'Bei einer Erbschaft oder Schenkung setzt das Finanzamt den Immobilienwert oft pauschal und deutlich zu hoch an. Mit einem qualifizierten Verkehrswertgutachten nach § 198 BewG können Sie den tatsächlichen Wert nachweisen und erhebliche Steuern sparen. Möchten Sie, dass Herr Lasarz Ihre Situation in einer kostenlosen Erstberatung prüft? Ich kann Ihre Kontaktdaten gerne aufnehmen.';
        } else if (lowerMessage.includes('scheidung') || lowerMessage.includes('trennung') || lowerMessage.includes('zugewinn') || lowerMessage.includes('ehe')) {
            responseText = 'Im Falle einer Scheidung ist eine neutrale Wertermittlung essenziell, um Streitigkeiten beim Zugewinnausgleich zu vermeiden. Unsere zertifizierten Gutachten sind gerichtsverwertbar und bieten beiden Parteien Sicherheit. Möchten Sie ein vertrauliches Erstgespräch vereinbaren? Ich kann direkt einen Rückruf für Sie eintragen.';
        } else if (lowerMessage.includes('ablauf') || lowerMessage.includes('dauer') || lowerMessage.includes('wie lange') || lowerMessage.includes('funktion')) {
            responseText = 'Der Ablauf ist ganz unkompliziert: Zuerst besprechen wir Ihr Anliegen telefonisch. Danach folgt eine Vor-Ort-Begehung der Immobilie durch Herrn Lasarz zur Erfassung des Bauzustands. Die Ausarbeitung des schriftlichen Gutachtens dauert anschließend ca. 2 bis 3 Wochen. Möchten Sie direkt einen Vor-Ort-Termin anfragen? Hinterlassen Sie mir einfach Ihre Daten.';
        } else if (lowerMessage.includes('gebiet') || lowerMessage.includes('wo') || lowerMessage.includes('ort') || lowerMessage.includes('region') || lowerMessage.includes('osnabrück')) {
            responseText = 'Unser Hauptsitz befindet sich in Osnabrück (Katharinenstraße 111). Wir bewerten jedoch regelmäßig Immobilien im gesamten Umland, darunter Münster, Bielefeld, Melle, Rheine und Flensburg. Haben Sie ein Objekt in einer dieser Regionen? Gerne können wir einen Rückruf vereinbaren, um Details zu besprechen.';
        } else if (shouldShowLeadForm) {
            responseText = 'Sehr gerne vereinbaren wir eine kostenlose Erstberatung oder einen Rückruf mit Herrn Lasarz. Bitte füllen Sie das kurze Formular unten aus, damit wir uns optimal vorbereiten können. Wir melden uns umgehend bei Ihnen!';
        } else {
            responseText = 'Das ist eine wichtige Frage. Um Ihnen hierzu eine präzise Auskunft geben zu können (z. B. passendes Bewertungsverfahren oder Honorar), bespricht Herr Lasarz dies am besten direkt kurz telefonisch mit Ihnen. Dies ist für Sie völlig kostenlos und unverbindlich. Möchten Sie Ihre Kontaktdaten für einen Rückruf hinterlassen?';
        }

        return NextResponse.json({
            text: responseText,
            showLeadForm: shouldShowLeadForm || lowerMessage.includes('ja') || lowerMessage.includes('angebot')
        });

    } catch (error) {
        console.error('Chat API Handler Error:', error);
        return NextResponse.json({ text: 'Entschuldigung, beim Verarbeiten Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt per Telefon.' }, { status: 500 });
    }
}
