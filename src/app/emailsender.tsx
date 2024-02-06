
{/**
// components/EmailSender.tsx
import React from 'react';
import nodemailer from 'nodemailer';

interface EmailSenderProps {
  formData: {
    name: string;
    surname: string;
    tel: string;
    email: string;
  };
}

const EmailSender: React.FC<EmailSenderProps> = ({ formData }) => {
  const sendEmail = async () => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'guido.llaurado@gmail.com',
          pass: 'disciplina',
        },
      });

      const mailOptions = {
        from: 'tuCorreo@gmail.com',
        to: 'destinatario@example.com',
        subject: 'Nuevo formulario completado',
        text: `Nombre: ${formData.name}\nApellido: ${formData.surname}\nTeléfono: ${formData.tel}\nCorreo electrónico: ${formData.email}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email enviado: ' + info.response);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
    <button onClick={sendEmail} className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Enviar Correo
    </button>
  );
};

export default EmailSender;
 */}