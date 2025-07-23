export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getWhatsAppLink(phone: string, message: string) {
  const cleanPhone = phone.replace(/\D/g, "");

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

// Constantes para WhatsApp
export const WHATSAPP_PHONE = "+5585996093955";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Admissão Auto Service.";
