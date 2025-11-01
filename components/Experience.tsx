import { Section, SectionTitle } from "./Section";
import { experiences, type ExperienceItem } from "@/lib/data";

function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} - ${endDate}`;
}

function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "yr" : "yrs"}`;
    }
    return `${years} ${years === 1 ? "yr" : "yrs"} ${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`;
  }
  return `${months} ${months === 1 ? "mo" : "mos"}`;
}

function calculateTotalDuration(roles: readonly ExperienceItem[]): string {
  if (roles.length === 0) return "";
  
  // Get the earliest start date and latest end date
  const startDates = roles.map((role) => parseMonthYear(role.startDate));
  const endDates = roles.map((role) => 
    role.endDate === "Present" ? new Date() : parseMonthYear(role.endDate)
  );
  
  if (startDates.length === 0 || endDates.length === 0) return "";
  
  const earliestStart = new Date(Math.min(...startDates.map((d) => d.getTime())));
  const latestEnd = new Date(Math.max(...endDates.map((d) => d.getTime())));
  
  const months = (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 + 
    (latestEnd.getMonth() - earliestStart.getMonth());
  
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "yr" : "yrs"}`;
    }
    return `${years} ${years === 1 ? "yr" : "yrs"} ${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`;
  }
  return `${months} ${months === 1 ? "mo" : "mos"}`;
}

function parseMonthYear(dateStr: string): Date {
  const months: Record<string, number> = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
    january: 0, february: 1, march: 2, april: 3, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
  };
  
  const parts = dateStr.toLowerCase().split(" ");
  const monthStr = parts[0];
  const year = Number.parseInt(parts[1] || new Date().getFullYear().toString(), 10);
  const month = months[monthStr] ?? 0;
  
  return new Date(year, month, 1);
}

function getRoleDuration(startDate: string, endDate: string): string {
  const start = parseMonthYear(startDate);
  const end = endDate === "Present" ? new Date() : parseMonthYear(endDate);
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "mo" : "mos"}`;
    }
    return `${years} ${years === 1 ? "yr" : "yrs"} ${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`;
  }
  return `${months} ${months === 1 ? "mo" : "mos"}`;
}

interface RoleItemProps {
  readonly role: ExperienceItem;
  readonly isLast: boolean;
}

function RoleItem({ role, isLast }: RoleItemProps) {
  const duration = getRoleDuration(role.startDate, role.endDate);
  
  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {/* Vertical line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-border mt-1.5"></div>
        {!isLast && (
          <div className="w-px h-full bg-border mt-2"></div>
        )}
      </div>
      
      {/* Role content */}
      <div className="flex-1 pb-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">{role.role}</h3>
          {role.type && (
            <p className="text-sm text-muted-light">{role.type}</p>
          )}
          <p className="text-sm text-muted-light">
            {formatDateRange(role.startDate, role.endDate)} · {duration}
          </p>
          <p className="text-sm text-muted-light">{role.location}</p>
        </div>
      </div>
    </div>
  );
}

interface CompanyGroupProps {
  readonly company: string;
  readonly roles: readonly ExperienceItem[];
}

function CompanyGroup({ company, roles }: CompanyGroupProps) {
  const totalDuration = calculateTotalDuration(roles);
  
  if (roles.length === 1) {
    // Single role - show role as main heading
    const role = roles[0];
    const duration = getRoleDuration(role.startDate, role.endDate);
    
    return (
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">{role.role}</h2>
          <p className="text-sm text-muted-light">
            {role.company} {role.type && `· ${role.type}`}
          </p>
          <p className="text-sm text-muted-light">
            {formatDateRange(role.startDate, role.endDate)} · {duration}
          </p>
          <p className="text-sm text-muted-light">{role.location}</p>
        </div>
        {role.responsibilities.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-muted ml-2 mt-4">
            {role.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  // Multiple roles - show company as main heading with timeline
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{company}</h2>
        <p className="text-sm text-muted-light">{totalDuration}</p>
      </div>
      
      <div className="relative">
        {roles.map((role, index) => (
          <RoleItem
            key={`${role.role}-${role.startDate}`}
            role={role}
            isLast={index === roles.length - 1}
          />
        ))}
      </div>
      
      {/* Show responsibilities from the most recent role if available */}
      {roles[0]?.responsibilities && roles[0].responsibilities.length > 0 && (
        <div className="ml-6 mt-4">
          <ul className="list-disc list-inside space-y-2 text-muted">
            {roles[0].responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Experience() {
  // Group experiences by company
  const grouped = experiences.reduce((acc, exp) => {
    if (!acc[exp.company]) {
      acc[exp.company] = [];
    }
    acc[exp.company].push(exp);
    return acc;
  }, {} as Record<string, ExperienceItem[]>);
  
  // Sort roles within each company by start date (most recent first)
  // Sort companies by most recent role start date
  const sortedGroups = Object.entries(grouped)
    .map(([company, roles]) => {
      const sortedRoles = [...roles].toSorted((a, b) => {
        const dateA = parseMonthYear(a.startDate);
        const dateB = parseMonthYear(b.startDate);
        return dateB.getTime() - dateA.getTime();
      });
      return { company, roles: sortedRoles };
    })
    .toSorted((a, b) => {
      const dateA = parseMonthYear(a.roles[0].startDate);
      const dateB = parseMonthYear(b.roles[0].startDate);
      return dateB.getTime() - dateA.getTime();
    });
  
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-12">
        {sortedGroups.map(({ company, roles }) => (
          <CompanyGroup key={company} company={company} roles={roles} />
        ))}
      </div>
    </Section>
  );
}
