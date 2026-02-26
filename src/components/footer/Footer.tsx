import { EnvelopeIcon, MapPinLineIcon, PhoneIcon } from "@phosphor-icons/react";

function Footer() {
  return (
    <div>
      <footer className="bg-linear-to-r from-slate-600 via-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h2 className="text-2xl font-bold">Elevva</h2>
                  <p className="text-sm opacity-90">
                    Descomplicando seu RH com modernidade!
                  </p>
                </div>
              </div>

              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Conectando pessoas com segurança, respeito e celebrando a
                diversidade.
              </p>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke-width="2"
                    />
                    <circle cx="12" cy="12" r="4" stroke-width="2" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>

                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48 
              0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 
              1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 
              0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0112 6.84c.85 0 
              1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.11 2.7.64.72 1.03 1.64 
              1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 
              0 .27.18.58.69.48A10.27 10.27 0 0022 12.26C22 6.58 17.52 2 12 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Navegação</h3>
              <ul className="space-y-3 text-sm opacity-90">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sobre Nós
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <EnvelopeIcon size={24} />
                  contato@axiom.com
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <PhoneIcon size={24} />
                  (81) 99999-9999
                </li>
                <li className="flex items-center gap-2">
                  <MapPinLineIcon size={24} color="#ffffff" />
                  Recife, PE
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Desenvolvido por</h3>
              <div className="bg-white/5 rounded-xl p-4 w-fit mb-4">
                <span className="text-xl font-bold text-white  px-4 py-2 rounded-md inline-block">
                  Axiom Team
                </span>
              </div>
              <p className="text-sm opacity-90">
                Tecnologia e inovação para conectar pessoas
              </p>
            </div>
          </div>

          <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>© 2026 Elevva. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline">
                Privacidade
              </a>
              <a href="#" className="hover:underline">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
