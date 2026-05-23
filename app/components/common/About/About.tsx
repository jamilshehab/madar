"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Droplets, Award, Shirt } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
};

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* ABOUT US */}
      <section className="pt-12">
        <div className="mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-2 items-center overflow-hidden rounded-[40px] bg-sky-50 border border-sky-100"
          >
            {/* IMAGE */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[350px] lg:h-[500px]"
            >
              <Image
                src="/images/about/5.png"
                alt="about"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-10 md:p-16 text-center lg:text-right"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-6"
              >
                <Sparkles className="w-10 h-10" />
              </motion.div>

              <h2 className="text-5xl font-black text-slate-900 mb-8">
                من نحن
              </h2>

              <p className="text-slate-700 leading-10 text-xl">
                شركة مدار غروب العراق لمنتجات وأدوات التنظيف، علامة متخصصة في
                تقديم حلول تنظيف عالية الجودة مصممة لتمنح المنازل عناية متكاملة
                ونظافة تدوم.
              </p>

              <p className="mt-6 text-slate-600 leading-10 text-xl">
                نعتمد على أحدث التقنيات الحديثة مع تركيبات فعالة وآمنة تمنح
                تجربة تنظيف راقية تجمع بين الأداء العالي والعناية الفائقة.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section>
        <div className="mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-2 items-center overflow-hidden bg-sky-50 border border-sky-100"
          >
            {/* IMAGE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[350px] lg:h-[500px] order-1 lg:order-2"
            >
              <Image
                src="/images/about/2.jpg"
                alt="vision"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-10 md:p-16 text-center lg:text-right order-2 lg:order-1"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-6"
              >
                <Sparkles className="w-10 h-10" />
              </motion.div>

              <h2 className="text-5xl font-black text-slate-900 mb-8">
                رؤيتنا
              </h2>

              <p className="text-slate-700 leading-10 text-xl">
                أن نكون المعيار الأول للأناقة والنظافة في كل منزل، محولين مفهوم
                العناية من مجرد مهمة يومية إلى تجربة فاخرة تعزز جودة الحياة.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section>
        <div className="mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-2 items-center overflow-hidden rounded-[40px] bg-sky-50 border border-sky-100"
          >
            {/* IMAGE */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[350px] lg:h-[500px]"
            >
              <Image
                src="/images/about/4.jpg"
                alt="mission"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-10 md:p-16 text-center lg:text-right"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto lg:mx-0 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-6"
              >
                <Leaf className="w-10 h-10" />
              </motion.div>

              <h2 className="text-5xl font-black text-slate-900 mb-8">
                رسالتنا
              </h2>

              <p className="text-slate-700 leading-10 text-xl">
                الالتزام بتقديم حلول مبتكرة وفائقة الجودة للعناية، تجمع بين قوة
                التنظيف المتطورة واللطف الفائق على الأنسجة، مع الحفاظ على
                التوازن البيئي.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sky-600 font-semibold text-lg">
              لماذا يختارنا العملاء؟
            </span>

            <h2 className="text-5xl font-black text-slate-900 mt-4">
              الجودة التي تستحقها منازلكم
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Droplets,
                title: "فعالية عالية",
                desc: "تركيبات قوية لإزالة الأوساخ والبقع بفعالية.",
              },
              {
                icon: Shirt,
                title: "لطيف على الأنسجة",
                desc: "عناية فائقة للحفاظ على جودة الأقمشة.",
              },
              {
                icon: Sparkles,
                title: "عطور مستوحاة من الطبيعة",
                desc: "روائح راقية تدوم طويلاً.",
              },
              {
                icon: Award,
                title: "جودة موثوقة",
                desc: "منتجات مصنعة وفق أعلى معايير الجودة.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[30px] p-8 border border-sky-100 hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-8">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section>
        <div className="mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid lg:grid-cols-2 items-center overflow-hidden bg-sky-600"
          >
            {/* CONTENT */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-10 md:p-16 text-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6"
              >
                <Leaf className="w-10 h-10" />
              </motion.div>

              <h2 className="text-5xl font-black mb-8">الاستدامة والابتكار</h2>

              <p className="text-xl leading-10 text-sky-50">
                نعتمد في تركيباتنا على مواد صديقة للبيئة وعبوات قابلة لإعادة
                التدوير، دون المساومة على كفاءة التنظيف التي تتوقعونها منا.
              </p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[350px] lg:h-full min-h-[500px]"
            >
              <Image
                src="/images/about/11.png"
                alt="sustainability"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
