"use client";

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgvkkrkw");

  if (state.succeeded) {
    return <p>Obrigado por entrar em contacto connosco!</p>;
  }

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
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="bor8 m-b-20 how-pos4-parent">
        <input
          className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
          type="text"
          name="name"
          placeholder="Nome Completo"
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
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
      <ValidationError prefix="message" field="msg" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
      >
        {state.submitting ? "..." : "Enviar"}
      </button>
    </form>
  );
}
