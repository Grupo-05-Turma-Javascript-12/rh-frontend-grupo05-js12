import {
  EnvelopeIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  MapPinLineIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <div>
      <footer className="bg-linear-to-r from-slate-800 to-slate-900 text-white">
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
                  <InstagramLogoIcon size={24} color="#ffffff" />
                </div>

                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                  <GithubLogoIcon size={24} color="#ffffff" />
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
