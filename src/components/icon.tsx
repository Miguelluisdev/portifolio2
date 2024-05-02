import { socialData } from "@/app/data/social-icons"


export const Icon = () => {
  return (
    <>
    {socialData.map((social) => (
      <div key={social.id} >
        <a href={social.socialNetwork} target="_blank" className="cursor-pointer text-[1.375rem] md:text-3xl xl:text-[2.4375rem] hover:text-[#1ea5dba4] transition-all duration-200 hover:scale-110">
          <div>
            {social.logo}
          </div>
        </a>
      </div>
    ))}
    </>
  )
}