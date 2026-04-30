# German Appointment Booking System

This is a German appointment booking system implemented for the Lasarz Immobiliengutachter website. It allows clients to:

1. Select a service type from a dropdown menu
2. Choose a preferred date for the appointment
3. Select a time slot from available options
4. Enter the property address
5. Submit the appointment request

## Features

- **Mobile Responsive**: Works well on all device sizes
- **German Language Interface**: All labels and messages are in German
- **Integration with Contact Form**: Links to the appointment booking from the main contact section
- **Confirmation Feedback**: Shows success message upon successful submission
- **Form Validation**: Required fields validation
- **Email Template**: Includes a ready-to-use confirmation email template

## Components

### AppointmentBooking Component
Located at: `src/components/sections/AppointmentBooking.tsx`

This component provides the complete appointment booking form with:
- Service selection dropdown
- Date picker with minimum date restriction
- Time slot selection
- Property address input
- Form submission handling

### Email Template
Located at: `src/lib/emailTemplates.ts`

Contains the email template for appointment confirmations:
- Subject line in German
- Body with appointment details
- Professional formatting

## Integration

The appointment booking system has been integrated into:
1. The homepage (`src/app/page.tsx`) 
2. The contact section (`src/components/sections/Contact.tsx`)

The contact section now includes a direct link to the appointment booking section for easy access.

## Usage

1. Users visit the website and navigate to either the homepage or contact page
2. They click on "Termin vereinbaren" (Book Appointment) 
3. Fill out the appointment form with:
   - Service type
   - Preferred date
   - Time slot
   - Property address
4. Submit the form
5. Receive confirmation message
6. The system sends an email confirmation (implementation pending)

## Implementation Notes

- This is a frontend-only implementation that simulates form submission
- In a production environment, you would connect this to a backend API
- The email template can be used with any email sending service
- All styling uses existing CSS variables from the project