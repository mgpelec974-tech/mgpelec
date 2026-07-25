"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SendStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer votre nom.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer un email valide.");
      return;
    }
    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Merci d'écrire un message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.error ?? "Échec de l'envoi, réessayez.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Échec de l'envoi, réessayez ou appelez-nous.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-lg space-y-3 text-left"
    >
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Votre nom"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-[var(--color-brand)]"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Votre email"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-[var(--color-brand)]"
      />
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={4}
        placeholder="Votre message"
        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-[var(--color-brand)]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer mon message"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-400">
          Message envoyé, je vous réponds rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
