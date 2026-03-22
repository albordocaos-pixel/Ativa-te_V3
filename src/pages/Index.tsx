import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import storefront from "@/assets/storefront.jpeg";
import poetaDesign from "@/assets/poeta-design.png";
import ClinicGallery from "@/components/ClinicGallery";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    title: "Fisioterapia Especializada",
    items: [
      "RPG – Reeducação Postural Global",
      "Terapia Manual – Osteopatia",
      "Fisioterapia Respiratória",
      "Saúde da Mulher",
      "Pilates Clínico (Grupo ou Individual)",
      "Terapia Miofascial",
      "Intervenção Pós-Operatória",
      "Atendimento ao Domicílio",
    ],
  },
  {
    title: "Terapia da Fala",
    items: [
      "Avaliação e intervenção em perturbações da comunicação, linguagem, fala e deglutição",
      "Atendimento ao Domicílio",],
  },
  {
    title: "Psicologia Clínica",
    items: ["Neuropsicologia", "Xadrez Lúdico e Terapêutico"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ativa-te" className="h-10 w-auto" />
            <span className="font-display text-2xl font-semibold text-foreground italic">Ativa-te</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a>
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={logo} alt="Ativa-te" className="h-28 w-auto mx-auto mb-8 drop-shadow-lg" />
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary-foreground italic mb-4">
            Ativa-te
          </h1>
          <p className="font-display text-xl md:text-2xl text-primary-foreground/90 mb-2">
            Unidade de Saúde e Bem-estar
          </p>
          <p className="font-display text-2xl md:text-3xl text-primary-foreground italic mt-8">
            Cuidamos de si!
          </p>
          <a
            href="#contacto"
            className="inline-block mt-10 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors"
          >
            Marcar Consulta
          </a>
        </motion.div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeInUp}
            >
              <img
                src={storefront}
                alt="Clínica Ativa-te em Aveiro"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeInUp}
            >
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground italic mb-6">
                Sobre Nós
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-foreground">Ativa-te</strong> é uma unidade de saúde e bem-estar localizada em Aveiro, 
                dedicada a proporcionar cuidados de excelência nas áreas de fisioterapia, 
                terapia da fala e psicologia clínica.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Sob a direção técnica de <strong className="text-foreground">Mª José Nolasco</strong>, 
                a nossa equipa multidisciplinar trabalha com compromisso e dedicação para 
                oferecer tratamentos personalizados e eficazes.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Acreditamos que cada pessoa é única e merece um plano de cuidados à sua medida. 
                O nosso objetivo é ajudá-lo a alcançar o seu máximo potencial de saúde e qualidade de vida.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground italic mb-4">
              Os Nossos Serviços
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeInUp}
              >
                <h3 className="font-display text-xl font-semibold text-foreground italic mb-4">
                  {service.title}
                </h3>
                <div className="w-10 h-0.5 bg-accent mb-6" />
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <ClinicGallery />

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground italic mb-4">
              Contacto
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
          >
            <div className="bg-card rounded-lg p-10 shadow-sm border border-border">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Morada</h4>
                    <p className="font-body text-muted-foreground mt-1">Rua das Glicínias, Loja 4</p>
                    <p className="font-body text-muted-foreground">Aveiro, Portugal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Telefone</h4>
                    <a
                      href="tel:+351964101825"
                      className="font-body text-muted-foreground mt-1 block hover:text-foreground transition-colors"
                    >
                      (+351) 964 101 825
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:contato@ativa-te.com"
                      className="font-body text-muted-foreground mt-1 block hover:text-foreground transition-colors"
                    >
                      contato@ativa-te.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border text-center">
                <p className="font-display text-lg text-foreground italic">Directora Técnica</p>
                <p className="font-display text-2xl font-semibold text-foreground mt-1">Mª José Nolasco</p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="mt-12 max-w-2xl mx-auto rounded-lg overflow-hidden shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUp}
          >
            <iframe
              title="Localização Ativa-te"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.5!2d-8.6538!3d40.6405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzI1LjgiTiA4wrAzOScxMy43Ilc!5e0!3m2!1spt-PT!2spt!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div>
            <p className="font-display text-xl text-primary-foreground italic mb-1">Ativa-te</p>
            <p className="font-body text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Ativa-te — Unidade de Saúde e Bem-estar. Todos os direitos reservados.
            </p>
          </div>
          <a
            href="https://poeta.design"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="font-body text-xs text-primary-foreground/60">by</span>
            <img src={poetaDesign} alt="Poeta.Design" className="h-24 w-auto invert" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
