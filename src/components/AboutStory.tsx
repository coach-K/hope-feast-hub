import widowsGathering from "@/assets/images/c340594c-f1a3-476f-b2b6-9df753bab56b.jpg";
import { MISSION } from "@/lib/foundation";
import { featuredGirlChildSchool, GIRL_CHILD_EVENT } from "@/lib/girl-child";
import { heroPhotoForSchool } from "@/lib/girl-child-photos";

const girlPhoto = featuredGirlChildSchool
  ? heroPhotoForSchool(featuredGirlChildSchool)
  : undefined;

export function AboutCopy() {
  const school = featuredGirlChildSchool;

  return (
    <div className="mt-5 space-y-4 text-lg text-muted-foreground">
      <p>
        Olori Adeola Relief Foundation serves widows and their dependents, schoolchildren, and older
        people. The work began with food, healthcare, and the dignity of being known by name.
      </p>
      <p>{MISSION}</p>
      <p>That mission is carried by four programmes.</p>
      <ul className="list-none space-y-3">
        <li>
          <span className="font-semibold text-foreground">Widows.</span> Feed the Widow brings food,
          healthcare, medical consultations, and empowerment to widows and their dependents, with
          the annual outreach in Agbara.
        </li>
        <li>
          <span className="font-semibold text-foreground">School Outreach.</span> Education, health,
          hygiene, and mentorship in the classroom{school
            ? `, including ${GIRL_CHILD_EVENT} at ${school.name} on ${school.dateLabel}.`
            : "."}
        </li>
        <li>
          <span className="font-semibold text-foreground">Back to School.</span> Books, uniforms,
          and help with fees so children can resume and stay in class.
        </li>
        <li>
          <span className="font-semibold text-foreground">Aged Care.</span> Food, health checks, and
          home visits for older people, including grandparents raising children.
        </li>
      </ul>
    </div>
  );
}

export function AboutPortraits() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <figure className="overflow-hidden rounded-3xl shadow-soft">
        <img
          src={widowsGathering}
          alt="Widows seated together at a foundation gathering inside the hall"
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover sm:h-[22rem]"
        />
      </figure>
      {girlPhoto ? (
        <figure className="mt-8 overflow-hidden rounded-3xl shadow-soft">
          <img
            src={girlPhoto.src}
            alt={girlPhoto.alt}
            loading="lazy"
            decoding="async"
            className="h-72 w-full object-cover sm:h-[22rem]"
          />
        </figure>
      ) : null}
    </div>
  );
}
