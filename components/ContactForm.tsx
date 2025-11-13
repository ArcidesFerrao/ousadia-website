import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgaadaz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        alert("Mensagem enviada com sucesso!");
      } else {
        alert(
          "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bor8 m-b-20 how-pos4-parent">
        <input
          className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
          type="text"
          name="email"
          placeholder="Endereço Electronico"
        />

        <Image
          className="how-pos4 pointer-none"
          src="/images/icons/icon-email.png"
          alt="ICON"
          width={18}
          height={18}
        />
      </div>
      <div className="bor8 m-b-20 how-pos4-parent">
        <input
          className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
          type="text"
          name="name"
          placeholder="Nome Completo"
        />
      </div>
      <div className="bor8 m-b-20 how-pos4-parent">
        <input
          className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
          type="text"
          name="subject"
          placeholder="Assunto"
        />
      </div>
      <div className="bor8 m-b-30">
        <textarea
          className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
          name="msg"
          placeholder="Como podemos ajudar?"
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
      >
        {isSending ? "..." : "Enviar"}
      </button>
    </form>
  );
}
