"use client";
import Square from "@/app/components/Background/Square";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { container, item } from "@/lib/animate";
import { motion } from "framer-motion";
import Project from "./components/Project";

export default function Projects() {


  return (
    <>
      <div className="relative z-10 h-full">
        <Square
          column="10"
          row="10"
          transparentEffectDirection="bottomToTop"
          blockColor="#161616"
        />

        <Header />
        <motion.div
          initial={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="container mx-auto w-11/12 sm:w-9/12 my-16 pb-4 pt-12">
          <div>
            <h2 className="text-5xl font-semibold">My Projects</h2>
            <p className="text-[#a7a7a7] sm:w-3/5 mt-1">On this page, you can see the projects that I have developed, which are actively ongoing or suspended.</p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
            <motion.div variants={item}>
              <Project
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/c/c2/OOjs_UI_icon_camera-invert.svg"
                name="Sivas Belediyesi Meraküm Kameraları (🇹🇷)"
                githubLink="#"
                websiteLink="https://haberlerbot.xyz"
                description="Meraküm Tepesi ve Şehir İçi Kameraları Gösteren Basit bir sitedir."
                tags={["HTML", "JavaScript"]}
              />
            </motion.div>


            <motion.div variants={item}>
              <Project
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/d/d4/OOjs_UI_icon_message-rtl-progressive.svg"
                name="HeyTR Mail Sistemi (Turkish)"
                githubLink="#"
                websiteLink="https://heytr.email"
                description="3 harfli kısa e-posta oluşturma sistemi. (BAKIMDA)"
                tags={["e-posta"]}
              />
            </motion.div>
                  
            <motion.div variants={item}>
              <Project
                imgUrl="https://heyturkiye204.github.io/heyturkiye204/cdn/projects/xrbot.jpg"
                name="Xr Bot (Turkish)"
                githubLink="#"
                websiteLink="https://bit.ly/XrBotDavet"
                description="Sunucunuzun Moderasyon, Ticket, Level sistemi gibi ihtiyaçları karşılayan bot."
                tags={["JavaScript", "Module"]}
              />
            </motion.div>

            <motion.div variants={item}>
              <Project
                imgUrl="https://heyturkiye204.github.io/heyturkiye204/cdn/projects/stubot.jpg"
                name="Stu Bot (Turkish)"
                githubLink="#"
                websiteLink="https://bit.ly/stubotdavet2024"
                description="Sunucunuzun Moderasyon ihtiyaçlarını karşılayan bot."
                tags={["JavaScript", "Module"]}
              />
            </motion.div>

            <motion.div variants={item}>
              <Project
                imgUrl="https://heyturkiye204.github.io/heyturkiye204/cdn/projects/hmbot.jpg"
                name="Hey Müzik Bot (Turkish)"
                githubLink="#"
                websiteLink="https://bit.ly/HMBotDavet"
                description="Sunucunuzun Müzik ihtiyaçlarını karşılayan bot."
                tags={["JavaScript", "Module"]}
              />
            </motion.div>

              <motion.div variants={item}>
              <Project
                imgUrl="https://heyturkiye204.github.io/heyturkiye204/cdn/projects/mbot.jpg"
                name="Mandalina Bot (Turkish)"
                githubLink="#"
                websiteLink="https://bit.ly/MandalinaBotDavet"
                description="Sunucunuzun Çekiliş ihtiyaçlarını karşılayan bot."
                tags={["JavaScript", "Module"]}
              />
            </motion.div>

             <motion.div variants={item}>
              <Project
                imgUrl="https://heyturkiye204.github.io/heyturkiye204/cdn/projects/nebe.jpg"
                name="Nöbetçi Eczaneler Bilgi Ekranı (Turkish)"
                githubLink="#"
                websiteLink="https://eczaneler.works/"
                description="Türkiye deki Nöbetçi Eczaneleri gösteren site."
                tags={["HTML", "JavaScript", "NextJS"]}
              />
            </motion.div>
                  
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
