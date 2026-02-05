"use client";

import { Check, ChevronDown, ChevronUp, CircleCheck, Facebook, Instagram, Palette, PartyPopper, Pointer, Printer } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "./modal";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const [selectedPackage, setSelectedPackage] = useState(1);
  const [selectedFaqs, setSelectedFaqs] = useState(1);
  const [openModal, setOpenModal] = useState(true);

  function handlePackages(selected: number) {
    setSelectedPackage(selected);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <div className={`relative w-full max-h-dvh bg-white flex flex-col ${openModal ? "overflow-hidden" : "overflow-scroll"}`}>
      {openModal && <Modal close={setOpenModal(false)} />}
      <nav className="flex w-full justify-evenly items-center bg-white">
        <div className="relative w-20 h-20">
          <Image src="/logo.png" alt="logo" fill objectFit="cover" />
        </div>

      </nav>
      <div className="flex flex-col justify-center items-center">
        {/* <div className="flex w-full bg-[#f6f6f8] justify-center py-10">
          <div className="bg-[#f6f6f8] relative rounded-xl overflow-hidden aspect-video w-full lg:w-2/3 max-w-[1100px]">
            <Image src="/gif.gif" alt="banner" fill objectFit="cover" />
            <div className="bg-black/70 absolute top-0 left-0 w-full h-full flex flex-col justify-end">
              <div className="flex flex-col items-start p-10">
                <div className="flex justify-center items-center rounded-xl bg-indigo-400/20 border-indigo-900 px-2 py-1">
                  <p className="text-indigo-400 font-medium text-xs tracking-wider">INTERACTIVE EXPERIENCE</p>
                </div>
                <p className="text-white font-extrabold text-6xl my-3">Ovia Digital</p>
                <p className="text-white text-medium">Where every smile becomes a story.</p>
                <p className="text-white text-medium">Captured in soft hues. Wrapped in magic.</p>
                <div className="flex flex-row mt-5 gap-5">
                  <button className="bg-indigo-500 text-white px-4 py-3 rounded-2xl font-medium cursor-pointer">Book Now</button>
                  <button className="bg-gray-300/30 text-white px-4 py-3 rounded-2xl font-medium cursor-pointer">Watch Video</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex w-full bg-[#f6f6f8] justify-center py-5 lg:py-10">
          <div className="flex flex-col lg:flex-row w-full lg:w-2/3 max-w-[1100px] gap-5">
            <div className="order-2 lg:order-1 relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden">
              <Image src="/gif.gif" alt="banner" fill objectFit="cover" />
              {/* <div className="absolute z-10 bottom-0 right-0 size-20">
                <Image src="/logo.png" alt="logo" fill objectFit="cover" />
              </div> */}
            </div>
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start">
              <div className="flex w-max justify-center items-center rounded-xl bg-indigo-400/20 border-indigo-900 px-2 py-1 my-3">
                <p className="text-indigo-400 font-medium text-xs tracking-wider">INTERACTIVE EXPERIENCE</p>
              </div>
              <p className="text-6xl font-extrabold mb-3 text-black">Ovia Digital</p>
              <p className="text-gray-400">Where every smile becomes a story.</p>
              <p className="text-gray-400">Captured in soft hues. Wrapped in magic.</p>
              <div className="flex flex-1 flex-row items-center mt-5 gap-5">
                <button className="bg-indigo-500 text-white px-4 py-3 rounded-2xl font-medium cursor-pointer">
                  <a
                    href="https://m.me/61580643959261"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </button>
                {/* <button onClick={() => setOpenModal(true)} className="bg-gray-300 text-white px-4 py-3 rounded-2xl font-medium cursor-pointer">Watch Video</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-[#f6f6f8] w-full justify-center items-center px-2 lg:p-0">
          <div className="flex flex-col justify-start items-start py-10 w-full lg:w-2/3 max-w-[1100px]">
            <p className="text-4xl font-extrabold mb-5 text-black">Why Choose Ovia?</p>
            <p className="text-gray-400 max-full md:max-w-2/3">We provide premium, interactive photo experience that your guests will never forget, combining cutting edge tech with classy setups.</p>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 mt-12 gap-5">
              <div className="flex-col justify-center items-start bg-white border-gray-200 rounded-4xl border p-5">
                <div className="rounded-full bg-indigo-100 w-16 h-16 flex justify-center items-center mb-5 mt-2">
                  <Pointer color="indigo" size={30} />
                </div>
                <p className="font-bold text-xl mb-3 text-black">Interactive Touch</p>
                <p className="text-gray-400">Interactive touch-to-start features that wow guests.</p>
              </div>
              <div className="flex-col justify-center items-start bg-white border-gray-200 rounded-4xl border p-5">
                <div className="rounded-full bg-indigo-100 w-16 h-16 flex justify-center items-center mb-5 mt-2">
                  <Palette color="indigo" size={30} />
                </div>
                <p className="font-bold text-xl mb-3 text-black">Custom Templates</p>
                <p className="text-gray-400">Photo layouts tailored specifically to your event's theme and colors.</p>
              </div>
              <div className="flex-col justify-center items-start bg-white border-gray-200 rounded-4xl border p-5">
                <div className="rounded-full bg-indigo-100 w-16 h-16 flex justify-center items-center mb-5 mt-2">
                  <Printer color="indigo" size={30} />
                </div>
                <p className="font-bold text-xl mb-3 text-black">Instant Prints</p>
                <p className="text-gray-400">High speed, high-quality 4R prints in seconds.</p>
              </div>
              <div className="flex-col justify-center items-start bg-white border-gray-200 rounded-4xl border p-5">
                <div className="rounded-full bg-indigo-100 w-16 h-16 flex justify-center items-center mb-5 mt-2">
                  <PartyPopper color="indigo" size={30} />
                </div>
                <p className="font-bold text-xl mb-3 text-black">Premium Props</p>
                <p className="text-gray-400">A curated selection of fun, high-quality, and classy props for all ages.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white w-full justify-center items-center py-10 px-2 lg:py-20">
          <p className="font-extrabold text-4xl text-black">Pricing & Packages</p>
          <p className="mt-5 mb-16 text-gray-400 max-w-full md:max-w-1/2 lg:max-w-1/3 text-center">Choose the perfect photobooth package for your special day. All packages include friendly on-site booth attendants.</p>
          <div className="flex flex-row gap-10 lg:gap-20 w-full lg:w-2/3 max-w-[1100px]">
            <div className="relative w-1/2 aspect-square rounded-xl overflow-hidden hidden md:block">
              <Image src="/mirror_photobooth_price.png" alt="Price" fill objectFit="cover" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex flex-row w-full bg-indigo-100 rounded-sm p-2 gap-5">
                <button className={`text-gray-600 p-1 rounded-sm font-bold cursor-pointer text-sm lg:text-normal ${selectedPackage === 1 && "bg-indigo-400 text-white"}`} onClick={() => handlePackages(1)}>Photo Standee Package</button>
                <button className={`text-gray-600 p-1 rounded-sm font-bold cursor-pointer text-sm lg:text-normal ${selectedPackage === 2 && "bg-indigo-400 text-white"}`} onClick={() => handlePackages(2)}>Keychain Package</button>
                <button className={`text-gray-600 p-1 rounded-sm font-bold cursor-pointer text-sm lg:text-normal ${selectedPackage === 3 && "bg-indigo-400 text-white"}`} onClick={() => handlePackages(3)}>All-in-one Package</button>
              </div>
              {selectedPackage === 1 &&
                <div className="py-5 px-2">
                  <p className="text-lg font-bold text-black">Photo Standee Package</p>
                  <p className="text-indigo-400 text-3xl font-extrabold">₱6,000</p>
                  <p className="text-gray-500 text-xs mb-2">until 2026 events only</p>
                  <div className="bg-indigo-400 flex justify-center items-center py-1 px-2 rounded-sm w-max mb-5">
                    <p className="text-white font-medium">3-hour service</p>
                  </div>
                  <p className="font-extrabold text-indigo-400 mb-1 tracking-wider">INCLUSIONS</p>
                  {/* <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">40" aesthetic touchscreen mirror</p>
                  </div> */}
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">4R high quality print w/ photo standee</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Strictly 1 print per session</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Customized layout and welcome screen</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Online gallery via FB page</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Red carpet and stanchions</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Available filters and stickers</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Fun props and accessories</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Accommodating booth attendants</p>
                  </div>
                  <p className="font-extrabold text-indigo-400 mt-5 mb-1 tracking-wider">ADD-ONS</p>
                  <p className="text-gray-500 font-medium text-sm">Extra hour - ₱1,500</p>
                  <p className="text-gray-500 font-medium text-sm">Photo Magnet - ₱1,500</p>
                </div>
              }
              {selectedPackage === 2 &&
                <div className="py-5 px-2">
                  <p className="text-lg font-bold text-black">Keychain Package</p>
                  <p className="text-indigo-400 text-3xl font-extrabold">₱8,500</p>
                  <p className="text-gray-500 text-xs mb-2">until 2026 events only</p>
                  <div className="bg-indigo-400 flex justify-center items-center py-1 px-2 rounded-sm w-max mb-5">
                    <p className="text-white font-medium">3-hour service</p>
                  </div>
                  <p className="font-extrabold text-indigo-400 mb-1 tracking-wider">INCLUSIONS</p>
                  {/* <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">40" aesthetic touchscreen mirror</p>
                  </div> */}
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">2 keychains</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Strictly 1 print per session</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Customized layout and welcome screen</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Online gallery via FB page</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Red carpet and stanchions</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Available filters and stickers</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Fun props and accessories</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">OPP plastic w/ adhesive</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Accommodating booth attendants</p>
                  </div>
                  <p className="font-extrabold text-indigo-400 mt-5 mb-1 tracking-wider">ADD-ONS</p>
                  <p className="text-gray-500 font-medium text-sm">Extra hour - ₱2,500</p>
                </div>
              }
              {selectedPackage === 3 &&
                 <div className="py-5 px-2">
                  <p className="text-lg font-bold text-black">All-in-one Package</p>
                  <p className="text-indigo-400 text-3xl font-extrabold">₱12,500</p>
                  <p className="text-gray-500 text-xs mb-2">until 2026 events only</p>
                  <div className="bg-indigo-400 flex justify-center items-center py-1 px-2 rounded-sm w-max mb-5">
                    <p className="text-white font-medium">3-hour service</p>
                  </div>
                  <p className="font-extrabold text-indigo-400 mb-1 tracking-wider">INCLUSIONS</p>
                  {/* <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">40" aesthetic touchscreen mirror</p>
                  </div> */}
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">4R high quality print, 1 photostrip, 2 keychains</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Strictly 1 print per session</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Customized layout and welcome screen</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Online gallery via FB page</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Red carpet and stanchions</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Available filters and stickers</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Fun props and accessories</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">OPP plastic w/ adhesive</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <CircleCheck color="gray" size={14} />
                    <p className="text-gray-500 font-medium text-sm">Accommodating booth attendants</p>
                  </div>
                  <p className="font-extrabold text-indigo-400 mt-5 mb-1 tracking-wider">ADD-ONS</p>
                  <p className="text-gray-500 font-medium text-sm">Extra hour - ₱3,500</p>
                </div>
              }
            </div>
          </div>
          <div className="w-full lg:w-2/3 max-w-[1100px] mt-5">
            <p className="text-xl font-semibold text-red-500 mb-2">Important Notes: </p>
            <p className="text-gray-400 text-sm">Free transportation applies only within the selected service area</p>
            <p className="text-gray-400 text-sm">Locations outside the service area are subject to additional transport charges</p>
            <p className="text-gray-400 text-sm">Client shall provide meals for booth attendants</p>
            <p className="text-gray-400 text-sm">Client shall provide a suitable setup and access area for equipment and transport</p>
          </div>
        </div>

        {/* Add ons */}
        {/* <div className="flex flex-col bg-[#f6f6f8] w-full justify-center items-center py-20">

        </div> */}


        {/* Guest experience */}
        <div className="flex flex-col bg-white w-full justify-center items-center py-20">
          <div className="bg-indigo-100 p-5 lg:p-10 rounded-lg w-full lg:w-2/3 max-w-[1100px]">
            <p className="font-extrabold text-4xl text-black">The Guests Experience</p>
            <p className="text-gray-400 text-sm mt-2">It's as easy as 1-2-3. No tech skills required!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
              <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center bg-indigo-400 w-10 h-10 rounded-full">
                  <p className="text-white text-xl font-bold">1</p>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image src="/step_1.png" alt="Step 1" fill objectFit="cover" />
                  </div>
                  <p className="mt-2 mb-5 text-center text-black">Simply touch the screen to begin your photo session.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center bg-indigo-400 w-10 h-10 rounded-full">
                  <p className="text-white text-xl font-bold">2</p>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image src="/step_2.png" alt="Step 2" fill objectFit="cover" />
                  </div>
                  <p className="mt-2 mb-5 text-center text-black">Select your preferred design on the screen.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center bg-indigo-400 w-10 h-10 rounded-full">
                  <p className="text-white text-xl font-bold">3</p>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image src="/step_3.png" alt="Step 3" fill objectFit="cover" />
                  </div>
                  <p className="mt-2 mb-5 text-center text-black">Grab your fun props, follow the on-screen countdown, and strike your poses.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex justify-center items-center bg-indigo-400 w-10 h-10 rounded-full">
                  <p className="text-white text-xl font-bold">4</p>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                    <Image src="/step_4.png" alt="Step 4" fill objectFit="cover" />
                  </div>
                  <p className="mt-2 mb-5 text-center text-black">Please wait a moment while your photo is being printed—then take it and enjoy!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col bg-[#f6f6f8] w-full justify-center items-center py-20 px-5">
          <p className="font-extrabold text-4xl text-black">Frequently Asked Questions</p>
          <p className="mt-5 mb-16 text-gray-400 max-w-full md:max-w-1/2 lg:max-w-1/3 text-center">Everything you need to know about our photobooth services. Find answers about logistics, pricing and availability.</p>
          <div className="my-10 flex flex-col gap-5  w-full lg:w-2/3 max-w-[1100px]">
            <button onClick={() => setSelectedFaqs(1)} className="flex flex-col w-full border border-gray-400 p-5 rounded-xl">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-black text-start">What is a Mirror Photobooth?</p>
                {selectedFaqs === 1 ? <ChevronUp size={24} color="indigo" /> : <ChevronDown size={24} color="indigo" />}
              </div>
              {selectedFaqs === 1 && <div className="border-b border-gray-200 my-5" />}
              {selectedFaqs === 1 && <div className="">
                <p className="text-sm text-gray-500 text-start">A Mirror Photobooth is a full-length interactive touchscreen mirror that lets guests take photos with fun animations, on-screen prompts, and instant prints. It’s stylish, modern, and perfect for any event.</p>
              </div>}
            </button>
            <button onClick={() => setSelectedFaqs(2)} className="flex flex-col w-full border border-gray-400 p-5 rounded-xl">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-black text-start">What events is the Mirror Photobooth good for?</p>
                {selectedFaqs === 2 ? <ChevronUp size={24} color="indigo" /> : <ChevronDown size={24} color="indigo" />}
              </div>
              {selectedFaqs === 2 && <div className="border-b border-gray-200 my-5" />}
              {selectedFaqs === 2 && <div className="">
                <p className="text-sm text-gray-500 text-start">Our Mirror Photobooth is perfect for weddings, birthdays, corporate events, debuts, anniversaries, school and community events.</p>
              </div>}
            </button>
            <button onClick={() => setSelectedFaqs(3)} className="flex flex-col w-full border border-gray-400 p-5 rounded-xl">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-black text-start">How many hours can we book the photobooth?</p>
                {selectedFaqs === 3 ? <ChevronUp size={24} color="indigo" /> : <ChevronDown size={24} color="indigo" />}
              </div>
              {selectedFaqs === 3 && <div className="border-b border-gray-200 my-5" />}
              {selectedFaqs === 3 && <div className="">
                <p className="text-sm text-gray-500 text-start">Packages start at 3 hours, with options to extend per hour depending on availability.</p>
              </div>}
            </button>
             <button onClick={() => setSelectedFaqs(4)} className="flex flex-col w-full border border-gray-400 p-5 rounded-xl">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="text-black text-start">What time do you arrive for setup?</p>
                {selectedFaqs === 4 ? <ChevronUp size={24} color="indigo" /> : <ChevronDown size={24} color="indigo" />}
              </div>
              {selectedFaqs === 4 && <div className="border-b border-gray-200 my-5" />}
              {selectedFaqs === 4 && <div className="">
                <p className="text-sm text-gray-500 text-start">We arrive 1–2 hours before the event to ensure proper setup and testing.</p>
              </div>}
            </button>
            <div className="flex flex-col justify-center items-center bg-indigo-800 p-10 rounded-xl">
                <p className="text-white text-xl font-bold mb-5">Still have questions?</p>
                <p className="text-white w-full lg:w-1/2 text-center">Can't find the answer you're looking for? Reach out to our team directly on Facebook for an immediate response.</p>
                <button className="text-indigo-800 bg-white p-5 my-5 rounded-xl">
                  <a
                    href="https://m.me/61580643959261"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on Facebook
                  </a>
                </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row w-full bg-white p-5 lg:p-20 justify-evenly gap-5">
          <div className="relative w-30 md:w-40 aspect-square rounded-xl overflow-hidden self-center lg:self-start">
            <Image src="/logo.png" alt="Logo" fill objectFit="cover" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-black">Business Hours:</p>
            <p className="text-black">Monday - Sunday, 8:00 - 17:00</p>
            <p className="mt-5 font-medium text-black">Santa Cruz, Laguna</p>
            <p className="font-medium text-black">info@oviadigital.com</p>
            <p className="font-medium text-black">+63 975 041 0601</p>
          </div>
          <div className="flex flex-col items-start">
            <button className="ring-0 bg-transparent border-0 font-medium text-black" onClick={() => router.push("privacy_policy")}>Privacy Policy</button>
            <button className="ring-0 bg-transparent border-0 font-medium text-black" onClick={() => router.push("terms_and_conditions")}>Terms & Conditions</button>
            <button className="ring-0 bg-transparent border-0 font-medium text-black" onClick={() => router.push("refund_policy")}>Refund Policy</button>
          </div>
        </div>
        <div className="flex flex-row w-full pb-5 px-5 justify-between">
          <p className="text-gray-500 font-medium">© Ovia Digital, 2026</p>
        </div>
      </div>
    </div>
  );
}
