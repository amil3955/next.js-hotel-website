import { FEATURES } from '@/Constants'
import Image from 'next/image'

type FeatureItemProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <div>
      <li className="flex w-full flex-1 flex-col items-start">
        <div className="rounded-full p-4 lg:p-7 bg-blue-50">
          <Image 
            src={icon}
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize bg-white/80">
          {title}
        </h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30
        lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    </div>
  )
}

const Features = () => {
  return (
    <section className="flex-col flexCenter
    overflow-hidden py-24">
      <div className="max-container padding-container relative w-full 
      flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/places.png"
            alt="places"
            width={640}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] ">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64 bg-white/80">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 
          lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description} 
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features