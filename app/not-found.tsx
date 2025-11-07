import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-5  justify-center min-h-screen text-center">
      <h1 className="font-bold">404 - Pagina não encontrada</h1>
      <p>Oops! A pagina que procura não existe.</p>
      <Link href="/">
        <h3 className="p-10  rounded-lg hover:text-gray-500 transition">
          Voltar para Veste Ousadia
        </h3>
      </Link>
    </section>
  );
}
