import { PEOPLE_URL } from "@/Constants";
import Image from "next/image";

type CampProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: 
  CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat`}>
      <div className="flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4 bg-gray-10 rounded-full p-3">
          <div className="rounded-full bg-blue-50 p-4">
            <Image 
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            /> 
          </div>
          <div className="flex flex-col gap-1 ">
            <h4 className="bold-18 text-gray">{title}</h4>
            <p className="regular-14 text-gray">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image 
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
         <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Hyatt Regency Bishkek"
          subtitle="Bishkek, Kyrgyzstan"
          peopleJoined="40+ Booked"
        />
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Phutawan Resort"
          subtitle="Prachuap Khiri Khan, Thailand"
          peopleJoined="50+ Booked"
        />
        <CampSite 
          backgroundImage="bg-bg-img-3"
          title="The Castle Hotel"
          subtitle="Dalian, China"
          peopleJoined="30+ Booked"
        />
       
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-50 p-8 lg:max-w-[400px] xl:max-w-[440px]
        xl:rounded-5xl xl:px-10 xl:py-15 relative w-full overflow-x-hidden
        rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64
          capitalize text-white">
            <strong>Unsure </strong>about your hotel choices? 
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Just like climbers exploring new terrains face anxiety about getting lost, travelers may feel uncertain about hotel options.  Relax! We're here to make your hotel experience stress-free and enjoyable, ensuring you start your adventure with ease.
          </p>
          <Image 
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp