import ValueCard from "@/components/profile/ValueCard";
import { MY_VALUES } from "@/constants/profile";

function ProfileValueSection() {
  return (
    <section id="values" className="scroll-mt-32 flex flex-col gap-8">
      <h2 className="text-2xl font-bold border-b pb-4">핵심 가치</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MY_VALUES.map((value) => (
          <ValueCard
            key={value.title}
            title={value.title}
            items={value.items}
          />
        ))}
      </div>
    </section>
  );
}

export default ProfileValueSection;
