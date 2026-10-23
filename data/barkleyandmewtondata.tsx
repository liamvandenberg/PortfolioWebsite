import React from "react";
import Image from "next/image";
import ZoomableImage from "@/components/casestudies/ZoomableImage";
import CodeBlock from "@/components/casestudies/CodeBlock";

export const barkleyAndMewtonData = {
  // Hero Section
  hero: {
    title: "Barkley&Mewton Business Platform",
    subtitle: "A custom business platform combining customer bookings, e-commerce, administration, and operational tooling for a growing pet grooming business.",
    logo: "/images/barkleyandmewton/barkleyandmewtonlogo.png",
    logoAlt: "Barkley&Mewton Logo",
    bgImage: "/images/barkleyandmewton/hero-parlour.png",
    bgImageAlt: "Barkley&Mewton Grooming Parlour",
  },

  // Meta Sidebar
  metaItems: [
    { label: "Year", value: "2026" },
    { label: "Duration", value: "3+ Months & Ongoing" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Stack", value: "C# · ASP.NET Core · Next.Js · TypeScript · Tailwind CSS · PostgreSQL" },
    { label: "Type", value: "Freelance Business Project" },
  ],

  // Narrative
  overviewHtml: (
    <p>
      <a href="https://barkleyandmewton.co.za" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">barkleyandmewton.co.za</a>{" "} 
      is a custom business platform built for a growing pet grooming parlour. The system brings customer bookings, pet management, e-commerce, administration, and operational workflows into a single platform, replacing a collection of limitations around the previous WordPress/WooCommerce setup.
    </p>
  ),

  problemHtml: (
    <p>
        The previous business infrastructure relied on an outdated WordPress/WooCommerce site that was becoming increasingly difficult to adapt to the business&apos;s operational needs. Important booking and customer data was difficult to track, the booking workflow had become overloaded, and expanding into additional e-commerce functionality would have introduced further complexity and cost.
    </p>
  ),

  solutionHtml: (
    <p>
        I built a custom business platform around the workflows the business actually needed. It includes a race-safe booking engine, customer and pet management, e-commerce, an administrative dashboard, operational booking tools, and built-in application telemetry and monitoring.    
    </p>
  ),

  // Engineering Decisions (Array)
  decisions: [
    {
      number: 1,
      title: "Designed Around The Business Domain",
      description: "The needs of the application went beyond a simple set of CRUD operations against a PostgreSQL database. The business needed to track custom operational data and export it to Excel using ClosedXML, while also maintaining relationships between clients and their pets. This data became part of the booking domain, where pet information was used to determine booking duration and cost. As the business was expanding into e-commerce, the platform also needed to support product management and reliably track customer purchases. These different areas of the business ultimately needed to be brought together through a bespoke management dashboard, allowing staff to maintain and operate the platform from a single place. This led to designing the backend around the business domain and its relationships, rather than treating the application as a collection of independent CRUD endpoints."
    },
    {
      number: 2,
      title: "Purposeful Seperation of Architecture",
      description: "There was a conscious effort to separate each part of the web platform with future expandability in mind. From the initial planning stage, each component needed to have a clearly defined responsibility and remain reasonably independent from the others. Rather than keeping the business logic within the same Node.js application as the frontend, the platform was split into a Next.js frontend and an ASP.NET Core backend. This created a clear boundary between the user interface and the business logic, while also leaving the backend available to future applications such as a mobile client or a standalone, administration-focused desktop application. This modular monolith provided a practical starting point without introducing the complexity of a distributed system. It established a central point through which applications consume business data, while authentication and authorization remain managed consistently by the backend. The goal wasn't to over-engineer the platform for applications that don't exist yet, but to establish clear boundaries that would make future expansion possible without having to rebuild the core business logic. It personally also allowed me to play to my strengths with C# for systems-programming.",
      imagePosition: "right" as const,
      children: (
        <Image 
          src="/images/barkleyandmewton/architecture_diagram_b_m.png"
          alt="Deployment Architecture"
          fill
          className="w-auto h-auto object-cover"
        />
      ),
    },
    {
      number: 3,
      title: "Service-Based ASP.NET Core Backend",
      description: "C# is my strongest language, and ASP.NET Core is a framework I am comfortable building with, which allowed me to focus on solving the business problems rather than learning an unfamiliar backend ecosystem at the same time. ASP.NET Core also provided the structure I wanted for keeping the backend separated into clear responsibilities. Controllers handle HTTP concerns, while application services contain the business logic and communicate with the persistence layer through Entity Framework Core. Dependency injection is used throughout the application to keep these components loosely coupled and easier to test independently. Entity Framework Core provided a natural way to model the business domain against PostgreSQL while still allowing the application to take advantage of database-specific capabilities where necessary. The backend also provided a central place for authentication, authorization, validation, and other business rules rather than leaving these responsibilities to the frontend. This approach resulted in a service-based backend where the API acts as more than a collection of database endpoints. The application services contain the rules that determine how the business operates, while the controllers remain relatively thin and focused on communicating with the consumers. Using the .NET ecosystem also gave the platform a strong foundation for authentication, logging, configuration, dependency injection, testing, and integration with external services. This made ASP.NET Core a practical choice not only because it was a framework I knew well, but because it provided the structure needed to keep the backend maintainable as the platform grew.",
      imagePosition: "left" as const,
      children: (
        <Image 
          src="/images/barkleyandmewton/api_architecture_diagram_backend_b_m.png"
          alt="API Top-Level Architecture"
          fill
          className="w-auto h-auto object-cover"
        />
      ),
    },
    {
      number: 4,
      title: "Next.js as Backend-For-Frontend",
      description: "For the frontend, I wanted to work with a framework outside of the Blazor ecosystem for once and use the project as an opportunity to become more familiar with React and modern JavaScript/TypeScript development. After spending some time working with Next.js, it became a natural choice for the web application. While TypeScript is not my favourite language to work with, Next.js proved to be a robust framework with a good balance between flexibility and structure. It provided the tools needed for the customer-facing application, which was its primary concern - we didn't really need to use Node.js too extensively. The frontend was therefore designed as a Backend-for-Frontend rather than having the browser communicate directly with the ASP.NET Core API. Next.js handles the web application's routing and server-side concerns, while its API routes act as the boundary between the browser and the business API. The API remains responsible for business logic, data access, authentication, authorization, and the core application rules, while Next.js is responsible for presenting that functionality to web users. The result was a frontend that could remain focused on the presentation of the user experience, and React very pleasant to work with in that regard.",
      
    },
    {
      number: 5,
      title: "Layered Authentication & Security",
      description: "From the first inception of the platform, I knew we would need a mechanism for handling different user roles and privileges. The system would have customers and administrators, each with very different rules of engagement with the application. I settled on JSON Web Tokens (JWT) for authentication and authorization, with the backend remaining responsible for determining what an authenticated user is actually allowed to do. Security was particularly important to me because the platform is being used by a real business that is expanding the amount of information it stores about its entire client base. I therefore approached security as something that needed to be considered across every layer of the application, rather than something that could be added after the core functionality was complete. We made an early decision to avoid storing two particularly sensitive categories of information ourselves. Passwords are never stored directly; only secure password hashes are persisted. We also deliberately chose not to store customers' banking details, reducing the amount of highly sensitive financial information the platform would be responsible for protecting. Authentication was built around JWT access tokens and rotating refresh tokens, with refresh tokens stored as hashes rather than as usable credentials. Email verification is used to establish ownership of customer accounts, while rate limiting and a server-side honeypot provide additional protection around registration and login surfaces. Administrator privileges are assigned and enforced server-side rather than being something a client can request for itself. Authorization is enforced throughout the API using protected controllers and role-aware access rules. The Next.js BFF also maintains the appropriate boundary between the browser and the ASP.NET Core API, so the frontend cannot simply bypass the application's intended authentication flow. I made especially sure that nothing except the Frontend can call these controllers. The result is a layered security model where no single client-side restriction is treated as sufficient protection. Authentication establishes identity, authorization establishes what that identity can access, the backend enforces the actual permissions, and sensitive data is deliberately minimized wherever the business does not require us to store it.",
      imagePosition: "right" as const,
      children: (
        <>
        <Image 
          src="/images/barkleyandmewton/decision5_pw_hash.png"
          alt="Our approach to password hashes is just one of the many ways we wanted to be careful with User data."
          fill
          className="w-auto h-auto object-cover"
        />
        <Image 
          src="/images/barkleyandmewton/rate_limiting_infographic.png"
          alt="Our rate limiting protection scheme"
          fill
          className="w-auto h-auto object-cover"
        />
        <Image 
          src="/images/barkleyandmewton/refresh_tokens_infographic.png"
          alt="A condensed look at the refresh token rotation scheme"
          fill
          className="w-auto h-auto object-cover"
        />
        </>
      ),
    }
    // more decision can fit here
  ],

  // Challenges (Array)
  challenges: [
    {
      number: 1,
      title: "Preventing Double Bookings Under Concurrency",
      content: (
        <>
        <p>One of the most important correctness problems in the platform was making sure that two customers could not successfully book the same grooming slot.
             At first, this sounds like a relatively simple availability problem. A customer selects a time, the application checks whether the slot is available, and the booking is created if nothing overlaps.
             The difficulty is that availability is not a static piece of information.
             Two customers can request the same slot at almost exactly the same time.
        </p> 

        <strong className="font-extrabold">The Race Condition</strong>

        <figure className="my-8 w-full">
          <ZoomableImage caption="Two customers try to book for the exact same time slot">
            <Image
            src="/images/barkleyandmewton/race_condition.png"
            alt="C# Retry Policy Snippet"
            fill
            className="object-contain p-2"
            />
          </ZoomableImage>
            <figcaption className="text-center text-xs font-mono text-gray-400 pt-3 px-2">
              An example of a race condition
            </figcaption>
        </figure>
        <p>
        The problem is not that either request performed an incorrect query.
        Both queries were correct at the moment they executed.
        The problem is that <strong> the check and the insert are separate operations.</strong>
        </p>

        <p>
          If the system relies exclusively on:
        </p>
        <CodeBlock
          filename="BookingDurationCalculator.cs"
          language="csharp"
          code={`var overlapExists = await context.Bookings.AnyAsync(x =>
      x.Status != BookingStatus.Cancelled &&
      x.StartDateTimeUtc < endDateTimeUtc &&
      startDateTimeUtc < x.EndDateTimeUtc);
            `}
            />
        
        <p>
          then there is a window between the AnyAsync() query and SaveChangesAsync() where another request can create a conflicting booking.
          This is called a check-then-act race.
          The application can therefore reject ordinary overlaps while still failing to guarantee the business invariant under concurrent requests.
        </p>
        <p>
          <strong>The first layer: application-level validation </strong>
          The application still performs the overlap check before creating a booking.
          For normal requests, this is useful because it allows the service to identify an unavailable slot without relying on a database exception for every attempted conflict.
          The overlap calculation is based on the booking&apos;s actual calculated end time:
        </p>
        <CodeBlock
          filename="BookingDurationCalculator.cs"
          language="csharp"
          code={`var startDateTimeUtc =
    DateTime.SpecifyKind(dto.StartDateTimeUtc, DateTimeKind.Utc);

var endDateTimeUtc =
    startDateTimeUtc.AddMinutes(durationMinutes);

var overlapExists = await context.Bookings.AnyAsync(x =>
    x.Status != BookingStatus.Cancelled &&
    x.StartDateTimeUtc < endDateTimeUtc &&
    startDateTimeUtc < x.EndDateTimeUtc);
            `}
            />
        <p>
          The comparison deliberately uses the complete booking window rather than simply comparing start times.
          For two bookings to overlap:
        </p>
          <CodeBlock
          filename="BookingDurationCalculator.cs"
          language="csharp"
          code={`Existing.Start < New.End 
 && 
 New.Start < Existing.End
            `}
          />
        <p>
          This correctly handles cases such as:
        </p>
        <CodeBlock
          code={`Existing:  |---------|
 New:           |---------|
              OVERLAP`}
          />
        <p>
          while allowing adjacent appointments:
        </p>
        <CodeBlock
          code={`Existing:  |---------|
New:                  |---------|
                      no overlap`}
          />
        <p>
        That distinction matters for a grooming business because a 10:00–11:00 appointment followed by an 11:00–12:00 appointment should be valid.
        The service also ignores cancelled bookings when determining availability, allowing a cancelled slot to become available again.
T       he important realization, however, was that <strong>this query cannot be the final authority on concurrency.</strong>
        </p>
        <p>
          <strong className="text-l font-extrabold">
            The database must enforce the invariant
          </strong>
        </p>
        <p>
        The actual business rule is: <strong>Two active customer bookings must never occupy overlapping time ranges.</strong>
        Postgres provides a particularly useful mechanism for enforcing this: an EXCLUDE USING GIST constraint (which I learned about way too late let me tell you...) </p>
        <p>
          The migration defines the booking interval as a PostgreSQL tstzrange and prevents overlapping ranges:
        </p>
        <CodeBlock
          code={`ALTER TABLE "Bookings"
ADD CONSTRAINT bookings_no_overlap
EXCLUDE USING GIST
 (
     tstzrange(
         "StartDateTimeUtc",
         "EndDateTimeUtc"
     ) WITH &&
 )
WHERE ("Status" <> 4 AND "ScheduledByAdmin" = false);`}
          />
        <p>
          This changes the problem from an application-level race into a database-enforced invariant.
          PostgreSQL now becomes the final authority over whether two customer bookings are allowed to coexist.
          The && range operator simply specifies that the time ranges cannot overlap. 
          Because the constraint operates on the stored booking interval, it protects the data even when two requests reach the database concurrently.
        </p>
        <p>
          <strong className="text-l font-extrabold">
            Why this is different from another availability check
          </strong>
        </p>
        <p>
        It would have been tempting to solve this entirely in application code with a sequence such that checks availability and makes a booking. 
        But that does not establish exclusivity.
        The database constraint instead makes the insert itself conditional on the invariant, which is much more authoritative.
        </p>
        <p><strong>Note:</strong></p>       
        <p>
        This entire scenario is sort of an edge case, since it blocks two requests that happen <strong>at the exact same time</strong>. 
        I don&apos;t forsee it really being that common, but it means that with this enforcement, whether this system serves 10 people or 10 000 people, it will always successfully block double bookings.
        </p>
        <p>
          <strong className="text-l font-extrabold">
            Turning a database conflict into an API response
          </strong>
        </p>
        <p>
        A database constraint is useful only if the application handles its failure deliberately.
        PostgreSQL reports an exclusion-constraint violation using SQLSTATE 23P01.
        The booking service allows that database exception to propagate after logging the conflict, while the controller identifies the specific PostgreSQL error:
        </p>
        <CodeBlock
          filename="BookingController.cs"
          language="csharp"
          code={`catch (DbUpdateException ex)
    when (IsExclusionConstraintViolation(ex))
{
    _logger.LogWarning(ex,
                "Booking creation conflicted with another booking"); //We log these to send to our own custom monitoring platorm

    return Problem(
        statusCode: StatusCodes.Status409Conflict,
        title: "Booking Conflict",
        detail: "The requested time is no longer available.");
}`}
          />
        <p>
        A 409 Conflict is important here because the request itself may be completely valid.
        The customer did not send malformed data, the requested appointment simply became unavailable because another booking won the race.
        The same conflict handling is also applied when an administrator updates a booking in a way that would violate the customer-booking constraint. (slight foreshadowing)
        </p>
        <p>
          <strong className="text-l font-extrabold">
            Availability is not treated as a reservation
          </strong>
        </p>
        <p>
        This also influenced how the availability endpoint was designed.
        The availability endpoint can tell the frontend which slots appear to be available, but that result is inherently temporary.
        For example:
        </p>
        <CodeBlock
          code={`09:30    Available
 10:00    Available
 10:30    Available`}
          />
        <p>
        does not mean that the 10:00 slot has been reserved for the customer who is currently viewing the page. Another request could successfully book it before the customer submits their own booking.
        The final POST /api/bookings operation therefore remains authoritative.
        The frontend uses availability to provide a good user experience.
        </p>
        <p>
          <strong className="text-l font-extrabold">
            Admin bookings are deliberately different (oh boy...)
          </strong>
        </p>
        <p>
        There is also an important business distinction in the database constraint:
        The business required administrators to be able to schedule overlapping appointments when necessary. 
        For example, staff may deliberately schedule concurrent grooming work that would not be permitted through the normal customer booking flow.
        Rather than weakening the entire constraint, the booking model records whether a booking was scheduled by an administrator:
        </p>
        <CodeBlock
          code={`ScheduledByAdmin = currentUser.IsAdmin,`}
          />
        <p>
        The Postgres contraint only applies when &quot;ScheduledByAdmin&quot; = false
        </p>
        <p>
        This was the preferable check since it means that the database can stay unaware of the distinctions between bookings, it would simply understand which records are subject to the invariant. 
        Admins needed to be able to do close to whatever they wanted within the bounds of the business logic, but in that it exposes the weaknesses of this system: The system is unfortunately vulnerable to admins feeding in bad data.
        </p>
        <p>
          <strong className="text-l font-extrabold">
            Cancellation also interacts with the constraint
          </strong>
        </p>
        <p>
        Cancelled bookings should no longer occupy a slot.
        The constraint therefore excludes cancelled bookings:
        </p>
        <CodeBlock
          code={`WHERE ("Status" <> 4 AND "ScheduledByAdmin" = false)`}
          />
        <p>
        This means cancelling a booking effectively releases its time range for future customer bookings without deleting the historical record. 
        This was an important choice since the business still wants to retain booking history, while the cancelled appointment no longer blocks the slot from being rebooked.
        </p>
        <p>
          <strong className="text-l font-extrabold">
            The Result
          </strong>
        </p>
        <p>
        The final pipeline design deliberately uses multiple layers:
        </p>
        <CodeBlock
          code={`Customer request
│
▼
BookingTimeHelper
Valid booking window
│
▼
Application overlap check
Fast normal rejection
│
▼
EF Core insert
│
▼
PostgreSQL exclusion constraint
Final concurrency guarantee
           │
    ┌──────┴──────┐
    │             │
  Success      Conflict
    │             │
    ▼             ▼
201 Created    409 Conflict`}
          />
        <p>
        The UI shows which slots are available.
        The application validates the request and provides a nice user experience.
        The controller translates the database conflict into a meaningful HTTP response.
        The database protects the integrity of the data when multiple requests come in at once.
        </p>
        <p>
        And the coolest part to me is that is scales really well with users since the foundation for the Insert functions is solid. Combined with the rate limiting, means it can stand up to being overwhelmed in production.
        </p>
        </>
      ),
    },
    {
      number: 2,
      title: "Securing a System With Different User Roles",
      content: (
        <p>Customers and administrators interact with the same platform but have fundamentally different capabilities. A customer should never be able to promote themselves to an administrator simply by modifying a request or submitting a different role value. Obviously. But in practice this was my first time working with JWT and Auth in general so the process was slow and meticulous.</p>
      ),
    },
  ],

  // Testing & Reliability Data
  testing: {
    metrics: [
      { label: "Backend Automated Tests", value: "749", subtext: "xUnit" },
      { label: "Frontend Automated Tests", value: "481", subtext: "Vitest" },
      { label: "E2E smoke tests", value: "32", subtext: "Playwright" },
    ],
    strategyContent: (
      <>
        <p>
          Testing wasn&apos;t limited to controllers and UI components. Business rules such as booking calculations, authentication behaviour, validation, and API responses were tested independently, while a full CI pipeline provides automated validation when changes are introduced.
        </p>
      </>
    ),
  },

  // Lessons Learned (Array)
  lessons: [
    {
      title: "Begin with a good user story",
      description: "When starting the project, owing to my own inexperience with anything of this scale, I would run ahead with my own ideas and features that were perhaps not at all what the business wanted. It helped to stay on the same page about what I am making. That is not to say that these things can't be added later, but stick to the plan",
    },
    {
      title: "Write stuff down",
      description: "This project started with a few simple concepts and very quickly grew to be way more complex. It was very valuable for me create documents and graphs to just keep myself on the correct page about where the application stood. I made a very clear choice to build this project in such a way that any developer could pick it up later, and for that goal it was important to add as much documentation as I could, and to build the components in a way that makes intuitive sense.",
    },
    {
      title: "How to build real applications.",
      description: "This is the project that taught me how to build a real application, that was made to solve real problems. This was a very large step up from basic tutorial projects I had done before, but this trial-by-fire gave me very good first-hand experience of what working on a real business application requires.",
    },
  ],
};