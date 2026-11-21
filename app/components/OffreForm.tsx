"use client";

import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SendStatus = "idle" | "sending" | "success" | "error";

export default function OffreForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    if (!phone.trim() || phone.trim().length < 6) {
      setStatus("error");
      setErrorMessage("Merci d'indiquer un numéro de téléphone.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/offre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
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
      setPhone("");
    } catch {
      setStatus("error");
      setErrorMessage("Échec de l'envoi, réessayez ou appelez-nous.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Votre nom"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[var(--color-brand-dark)]"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Votre email"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[var(--color-brand-dark)]"
      />
      <input
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Votre téléphone"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-[var(--color-brand-dark)]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-[var(--color-brand)] px-6 py-3 font-semibold text-white shadow-sm transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending"
          ? "Envoi en cours..."
          : "Je profite de l'offre"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-green-700">
          Votre demande a bien été envoyée, je vous recontacte rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
