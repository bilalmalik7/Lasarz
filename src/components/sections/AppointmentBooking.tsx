'use client';

import { useState } from 'react';

export function AppointmentBooking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Service options
  const serviceOptions = [
    { id: 'verkehrswertgutachten', name: 'Verkehrswertgutachten' },
    { id: 'kurzgutachten', name: 'Kurzgutachten' },
    { id: 'kaufberatung', name: 'Kaufberatung' },
    { id: 'schadensgutachten', name: 'Schadensgutachten' },
    { id: 'beleihungswert', name: 'Beleihungswertgutachten' },
    { id: 'energieausweis', name: 'Energieausweis' },
    { id: 'investmentberatung', name: 'Investmentberatung' },
    { id: 'sonstiges', name: 'Sonstiges' }
  ];

  // Time slots
  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, this would send the data to a backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setSelectedService('');
      setSelectedDate('');
      setSelectedTime('');
      setPropertyAddress('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="termin-buchen" className="section">
      <div className="container">
        <div className="glass-card">
          <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>
            Termin vereinbaren
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
            Buchen Sie einen Termin für eine persönliche Beratung. Füllen Sie das Formular aus und wir melden uns in Kürze bei Ihnen.
          </p>

          {submitSuccess ? (
            <div 
              style={{ 
                backgroundColor: 'rgba(37, 211, 102, 0.1)', 
                padding: '1rem', 
                borderRadius: '4px', 
                marginBottom: '1.5rem',
                border: '1px solid rgba(37, 211, 102, 0.3)'
              }}
            >
              <p style={{ margin: 0 }}>
                Vielen Dank für Ihre Terminanfrage! Wir haben Ihre Daten erhalten und melden uns in Kürze bei Ihnen.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="flex-col gap-md">
            {/* Service Type */}
            <div>
              <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Dienstleistung *
              </label>
              <select
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="form-input"
                style={{ width: '100%' }}
              >
                <option value="">Bitte wählen Sie eine Dienstleistung</option>
                {serviceOptions.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="date" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Gewünschtes Datum *
              </label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                className="form-input"
                style={{ width: '100%' }}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time Slot */}
            <div>
              <label htmlFor="time" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Uhrzeit *
              </label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="form-input"
                style={{ width: '100%' }}
              >
                <option value="">Bitte wählen Sie eine Uhrzeit</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Address */}
            <div>
              <label htmlFor="address" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Adresse der Immobilie *
              </label>
              <input
                type="text"
                id="address"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
                required
                placeholder="Straße, Hausnummer, PLZ, Ort"
                className="form-input"
                style={{ width: '100%' }}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
              style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
            >
              {isSubmitting ? 'Termin wird gebucht...' : 'Termin vereinbaren'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}