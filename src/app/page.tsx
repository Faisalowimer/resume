import { ResumePage } from "@/components/resume/resumePage";
import { ResumeActions } from "@/components/resume/resumeActions";

export default function Home() {
  return (
    <main className="relative">
      <ResumeActions />
      <ResumePage />
    </main>
  );
}
