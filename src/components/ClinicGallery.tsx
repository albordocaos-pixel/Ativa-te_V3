import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import clinicCorridor2 from "@/assets/clinic-corridor2.jpeg";
import clinicPilates from "@/assets/clinic-pilates.jpeg";
import clinicHallway from "@/assets/clinic-hallway.jpeg";
import clinicReception from "@/assets/clinic-reception.jpeg";
import clinicLounge2 from "@/assets/clinic-lounge2.jpeg";
import clinicTreatment3 from "@/assets/clinic-treatment3.jpeg";
import clinicOffice3 from "@/assets/clinic-office3.jpeg";

const photos = [
  { src: clinicCorridor2, alt: "Corredor e equipamentos da unidade" },
  { src: clinicPilates, alt: "Sala de Pilates clínico" },
  { src: clinicHallway, alt: "Zona de espera com luz natural" },
  { src: clinicReception, alt: "Receção e decoração" },
  { src: clinicCorridor2, alt: "Corredor dos gabinetes" },
  { src: clinicLounge2, alt: "Zona de espera e café" },
  { src: clinicTreatment3, alt: "Gabinete de tratamento" },
  { src: clinicLounge2, alt: "Zona de café e conforto" },
  { src: clinicOffice3, alt: "Gabinete de consulta" },
];

const ClinicGallery = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground italic mb-4">
            As Nossas Instalações
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative group h-[380px] sm:h-[480px] md:h-[560px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => {}}
            loop
            centeredSlides
            grabCursor
            spaceBetween={18}
            speed={800}
            autoplay={{
              delay: 5200,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".gallery-pagination",
              bulletClass: "gallery-bullet",
              bulletActiveClass: "gallery-bullet-active",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.15, spaceBetween: 16 },
              1024: { slidesPerView: 2.3, spaceBetween: 24 },
            }}
            className="!overflow-visible h-full"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index} className="!h-full">
                <div className="rounded-2xl overflow-hidden shadow-sm bg-muted/40 h-full">
                  <div className="h-full w-full aspect-[3/4] bg-black/5 flex items-center justify-center">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-background transition-colors opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Slide anterior"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-background transition-colors opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Próximo slide"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="gallery-pagination flex items-center justify-center gap-2 mt-8" />
      </motion.div>

      <style>{`
        .gallery-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: hsl(var(--border));
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .gallery-bullet-active {
          background: hsl(var(--primary)) !important;
          width: 24px;
        }
      `}</style>
    </section>
  );
};

export default ClinicGallery;
