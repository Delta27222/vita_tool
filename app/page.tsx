'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Play } from "lucide-react";
import {
  BackComputer,
  EmailIcon,
  FrontComputer,
  PhoneIcon,
  VitaLogo,
} from "@/components/icons";
import { formatPhoneNumber } from "@/lib/utils";

export default function Home() {
  const [isSafari, setIsSafari] = React.useState(false);

  React.useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
    ua.includes("safari")&&
    !ua.includes("chrome") &&
    !ua.includes("firefox") &&
    !ua.includes("edge") &&
    !ua.includes("opr");

    setIsSafari(isSafariBrowser);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <VitaLogo className="size-20" />
            </Link>
            <nav className="ml-10 space-x-8 md:flex">
              <Link
                href="#how-it-works"
                className="hidden md:flex text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Cómo funciona
              </Link>
              <Link
                href="#pricing-section"
                className="hidden md:flex text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Precios
              </Link>
              <Link
                href="#features-section"
                className="hidden md:flex text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Funcionalidades
              </Link>
              <Link
                href="#faq-section"
                className="hidden lg:flex text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                FAQ
              </Link>
              <Link
                href="#contact-section"
                className="hidden lg:flex text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={process.env.NEXT_PUBLIC_VITA_LOGIN_LINK || "#"}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium  text-teal-600 bg-white border border-teal-600 rounded-md hover:bg-teal-50 text-nowrap"
            >
              Iniciar sesión
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_VITA_REGISTER_LINK || "#"}
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 text-nowrap"
            >
              Prueba gratis
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section                       h-screen?????? */}
        <section className="py-12 bg-white md:py-20  flex justify-center items-center">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-[50rem] mx-auto text-center flex flex-col justify-center items-center">
              <p className="mb-3 text-sm font-medium text-teal-600">
                Vita by Avila Tek.
              </p>
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl leading-[50px] md:leading-[60px]">
                <span>Gestiona </span>
                <span className="font-normal">pacientes. </span>
                <span>Optimiza </span>
                <span className="font-normal">tu tiempo. </span>
                <span>Mejora </span>
                <span className="font-normal">la atención.</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600 max-w-[75%] text-center">
                Fácil de usar, seguro y eficiente. Nuestro software te permite
                gestionar a tus pacientes clínicos, gestionar citas y mejorar
                consultas en un solo lugar.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  href="#features-section"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-gray-200"
                >
                  Saber más
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_VITA_REGISTER_LINK || "#"}
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-teal-700"
                >
                  Prueba gratis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Product Showcase Combined Section */}
        <section
          className="pt-12 pb-[15%] bg-white md:pt-20 md:pb-[10%]"
          id="how-it-works"
        >
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                  <span className="font-medium">Nuestra misión </span>
                  <span className="font-normal">
                    es mejorar la gestión de tus pacientes
                  </span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Imagina tener una herramienta que te ayuda a organizar y
                  optimizar todos los aspectos de tu práctica, desde la
                  interacción inicial con tus pacientes hasta la gestión de tus
                  finanzas.
                </p>
              </div>
              <div className="relative flex flex-col justify-start items-center border border-blue-700">
                <BackComputer className={`${isSafari ? 'scale-80 md:scale-95 md:mr-10' : 'scale-90'}`} />
                <FrontComputer className={`${isSafari ? 'scale-60 left-[30px] top-[90px] md:scale-95 md:mr-10 md:left-[50px] lg:top-[130px]' : 'scale-75 left-[50px] top-[130px] md:left-[120px] lg:top-[147px]'} absolute md:flex"`} />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 bg-gray-50 md:py-20" id="pricing-section">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="mb-4 text-3xl tracking-tight text-gray-900">
                Entérate de nuestro <span className="font-medium">precio especial</span>
              </h2>
              <p className="text-gray-600">
                Por ser de los primeros usuarios, aprovecha este precio especial de lanzamiento, ¡No te quedes atrás!
              </p>
            </div>
            <div className="grid grid-cols-1 md:flex md:flex-col justify-center items-center gap-8 max-w-4xl mx-auto">
              {/* Plan */}
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md  md:w-[50%]">
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-primary">Plan especial</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 mb-6">
                      $14.99
                    </span>
                    <span className="ml-1 text-gray-500">/ mes</span>
                  </div>
                  <p className="text-gray-600">Todo lo que necesitas para empezar, a un precio increíble.</p>
                </div>
                <div className="w-full h-[.6px] bg-gray-200 mb-6"/>
                <ul className="mb-6 space-y-4 flex-1">
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Gestión de pacientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Confirmación de citas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Gestión de pagos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Resumen del paciente</span>
                  </li>
                </ul>
                <Link
                  href={process.env.NEXT_PUBLIC_VITA_REGISTER_LINK || "#"}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded-md hover:bg-teal-50"
                >
                  Quiero el mes de prueba <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="py-12 bg-gray-50 md:py-20" id="pricing-section">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4 text-3xl tracking-tight text-gray-900">
                Nuestros <span className="font-medium">precios</span>
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Erom feugiat vel velit
                euismod id.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Básico</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      $20
                    </span>
                    <span className="ml-1 text-gray-500">/mes</span>
                  </div>
                </div>
                <ul className="mb-6 space-y-4 flex-1">
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Gestión de pacientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Historial de citas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>100 pacientes incluidos</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700"
                >
                  Seleccionar plan <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="flex flex-col p-6 bg-white rounded-lg shadow-md border-2 border-teal-600">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      $30
                    </span>
                    <span className="ml-1 text-gray-500">/mes</span>
                  </div>
                </div>
                <ul className="mb-6 space-y-4 flex-1">
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Gestión de pacientes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Historial de citas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Recordatorios automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-teal-600">✓</span>
                    <span>Documentación personalizada</span>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700"
                >
                  Seleccionar plan <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <section className="py-12 bg-white md:py-20" id="features-section">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4 text-3xl font-normal tracking-tight text-gray-900">
                Explora las{" "}
                <span className="font-medium">funcionalidades de Vita</span>
              </h2>
            </div>
            <div className="grid gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
              {/* Feature 1 */}
              <div className="relative overflow-hidden rounded-lg h-[280px] group">
                <Image
                  src="images/vita-feature-1.jpg?height=300&width=400"
                  alt="IA Integrada"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-0 bg-white/80 backdrop-blur-sm w-full h-[22%] transition-all duration-300 group-hover:backdrop-blur-md"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-black">
                  <h3 className="text-lg">IA Integrada</h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative overflow-hidden rounded-lg h-[280px] group">
                <Image
                  src="images/vita-feature-2.jpg?height=200&width=400"
                  alt="Gestión de pacientes"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-0 bg-white/80 backdrop-blur-sm w-full h-[22%] transition-all duration-300 group-hover:backdrop-blur-md"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-black">
                  <h3 className="text-lg">Gestión de pacientes</h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative overflow-hidden rounded-lg h-[280px] group">
                <Image
                  src="images/vita-feature-3.jpg?height=200&width=400"
                  alt="Gestión de consultas"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-0 bg-white/80 backdrop-blur-sm w-full h-[22%] transition-all duration-300 group-hover:backdrop-blur-md"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-black">
                  <h3 className="text-lg">Gestión de consultas</h3>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative overflow-hidden rounded-lg h-[280px] group lg:col-start-2">
                <Image
                  src="images/vita-feature-4.jpg?height=200&width=400"
                  alt="Notificaciones de citas"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-0 bg-white/80 backdrop-blur-sm w-full h-[22%] transition-all duration-300 group-hover:backdrop-blur-md"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-black">
                  <h3 className="text-lg font-normal">
                    Notificaciones de citas
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-teal-600 md:py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white max-w-2xl">
                <h2 className="text-2xl font-bold mb-2">
                  No desperdicies ni un instante más en gestionar a tus
                  pacientes de forma efectiva.
                </h2>
                <p className="text-teal-100">
                  Sin contratos a largo plazo. Sin trampas. Simple.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100"
                >
                  Ver demostración
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border border-white rounded-md hover:bg-white/10"
                >
                  Contactar ventas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white md:py-20" id="faq-section">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4 text-3xl font-normal tracking-tight text-gray-900">
                Preguntas <span className="font-medium">frecuentes</span>
              </h2>
              <p className="text-gray-600">
                Todo lo que necesitas saber sobre el producto y la facturación.
              </p>
            </div>
            <div className="max-w-3xl mx-auto divide-y">
              {/* FAQ Item 1 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Tiene Vita trial gratuito?</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Sí, puedes usar Vita de forma gratuita durante 30 días, sin
                    necesidad de introducir tu información de pago.
                  </p>
                </details>
              </div>

              {/* FAQ Item 2 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Puedo cambiar de plan más tarde?</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Sí, puedes actualizar o cambiar tu plan en cualquier momento
                    desde tu panel de control.
                  </p>
                </details>
              </div>

              {/* FAQ Item 3 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Qué es la cancelación gratis?</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Puedes cancelar tu suscripción en cualquier momento sin
                    cargos adicionales.
                  </p>
                </details>
              </div>

              {/* FAQ Item 4 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Puedes ofrecer un descuento para mi equipo?</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Sí, ofrecemos descuentos para equipos. Contacta con nuestro
                    equipo de ventas para más información.
                  </p>
                </details>
              </div>

              {/* FAQ Item 5 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Cómo funciona la facturación?</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    La facturación se realiza mensualmente o anualmente, según
                    el plan que elijas.
                  </p>
                </details>
              </div>

              {/* FAQ Item 6 */}
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>¿Cómo cancelo mi cuenta?</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Puedes cancelar tu cuenta en cualquier momento desde la
                    configuración de tu cuenta.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Combined with Final CTA) */}
      <footer className="bg-teal-700 text-white">
        <div className="container px-4 py-16 mx-auto md:px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
            Sin contratos a largo plazo. Sin trampas. Simple.
          </h2>
          <p className="mb-8 text-teal-100 max-w-2xl mx-auto">
            Comienza tu prueba gratuita de 30 días. Cancela en cualquier
            momento.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mb-16">
            <Link
              href="#contact-section"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-teal-700 bg-white border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-gray-100"
            >
              <Play className="w-4 h-4 mr-2" /> Ver demostración
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_VITA_REGISTER_LINK || "#"}
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-500 border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-teal-400"
            >
              Comienza ahora
            </Link>
          </div>

          <div
            className="border-t border-teal-600 pt-8 pb-4 mx-auto "
            id="contact-section"
          >
            <div className="flex flex-col space-y-4 md:flex-row justify-between items-center ">
              <p className="text-sm text-teal-200 mt-4">
                © 2025 Avila Tek. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 justify-center items-center  mt-4 md:mt-0">
                <Link
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_VITA_PHONE_NUMBER}`}
                  className="text-sm text-teal-200 hover:text-white flex flex-row justify-center items-center gap-2"
                >
                  <PhoneIcon className="size-4" />
                  <span>{formatPhoneNumber(process.env.NEXT_PUBLIC_VITA_PHONE_NUMBER || '4242782759')}</span>
                </Link>
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_VITA_CONTACT_EMAIL || "info@avilatek.com"}?subject=Consulta VITA&body=Buenos días, quisiera solicitar información sobre el software VITA...`}
                  className="text-sm text-teal-200 hover:text-white flex flex-row justify-center items-center gap-2"
                >
                  <EmailIcon className="size-4" />
                  <span>{process.env.NEXT_PUBLIC_VITA_CONTACT_EMAIL || "info@avilatek.com"}</span>
                </Link>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href={process.env.NEXT_PUBLIC_VITA_TERMS_LINK || "#"}
                  className="text-sm text-teal-200 hover:text-white"
                >
                  Terms
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_VITA_POLICIES_LINK || "#"}
                  className="text-sm text-teal-200 hover:text-white"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
