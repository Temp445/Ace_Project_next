import React, { useState } from 'react';

const YourComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const gmailTypos = [
    'gamil.com', 'gnail.com', 'gmial.com', 'gmaill.com', 'gmail.con',
    'gmail.co', 'gmail.om', 'gmail.cim', 'gmail.cm', 'gmai.com',
    'gmail.comm', 'gmal.com', 'gmaul.com', 'gmail.xom', 'gmail.vom',
    'g.mail.com', 'gmaik.com', 'gmaio.com', 'gmali.com', 'gmali.con',
    'gmail.clm', 'gmail.coom', 'gmaiil.com', 'ggmail.com', 'gemail.com',
    'gmmail.com', 'gmiall.com', 'gmsil.com', 'gmale.com', 'gmall.com',
    'gmil.com', 'gmailc.om', 'gmailc.com', 'gmailm.com', 'gmali.cm',
    'gmalil.com', 'gmial.cm', 'gmaol.com', 'gmauk.com', 'gmaul.co',
    'gmail.ckm', 'gmail.kom', 'gmail.bom', 'gmail.dcom', 'gmaul.con', 'mail.com'
  ];

  const validateEmail = (email: string): string => {
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address.';
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (gmailTypos.includes(domain)) {
      return 'Did you mean "gmail.com"? This domain looks incorrect.';
    }

    return '';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value.trim();
    setEmail(emailInput);
    setEmailError(validateEmail(emailInput));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateEmail(email);
    setEmailError(error);

    if (error) {
      console.warn('Form blocked due to email error.');
      return; // Block submission
    }

    // ✅ Email is valid, continue submission
    alert(`Form submitted successfully with email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        required
        placeholder="Email *"
        onChange={handleEmailChange}
        className="text-sm md:text-[16px] border p-2 mt-1 rounded w-full"
      />
      {emailError && (
        <p className="text-red-500 text-sm mt-1">{emailError}</p>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default YourComponent;
