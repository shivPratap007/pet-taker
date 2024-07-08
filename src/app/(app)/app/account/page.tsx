import ContentBlock from "@/components/ContentBlock";
import Heading from "@/components/Heading";

export default function Account() {
  return (
    <>
    <main>
      <Heading customClasses="my-8 text-white">
        Your account
      </Heading>
      <ContentBlock customClasses="h-[400px] ">
        <p>Logged in as ...</p>
      </ContentBlock>
    </main>
    </>
  )
}
