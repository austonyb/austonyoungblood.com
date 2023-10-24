import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'

export default function HomeAbout() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <Image
            src='/static/images/auston2.jpg'
            alt="avatar"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Auston Youngblood</h3>
          <div className="text-gray-500 dark:text-gray-400">Full Stack Developer</div>
          <div className="text-gray-500 dark:text-gray-400">Untold.dev / Mity Co.</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:hello@austonyoungblood.com`} />
            <SocialIcon kind="github" href={"https://github.com/austonyb/"} />
            <SocialIcon kind="linkedin" href={"https://www.linkedin.com/in/auston-youngblood/"} />
            <SocialIcon kind="twitter" href={"https://twitter.com/austony"} />
          </div>
        </div>
      </div>
    </div>
  )
}
