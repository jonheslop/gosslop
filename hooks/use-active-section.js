import { useEffect, useState } from 'react';

export default function useActiveSection(pageSlugs) {
  const [activeSection, setActiveSection] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    pageSlugs.forEach((slug) => {
      observer.observe(document.getElementById(slug));
    });

    return () => {
      pageSlugs.forEach((slug) => {
        if (document.getElementById(slug) !== null) {
          observer.unobserve(document.getElementById(slug));
        }
      });
    };
  }, [pageSlugs]);

  return activeSection;
}
