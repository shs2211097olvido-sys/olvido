  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrgigger';
   
  if (window.gsap) {
            gsap.registerPlugin(ScrollTrigger);

            
            const intro = gsap.timeline();

            intro.from("#hero h1", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            intro.from("#hero p, #hero a, #hero button", {
                y: 25,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out"
            }, "-=0.4");

            intro.from("#heroImage", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

            
            gsap.utils.toArray(".reveal").forEach(function (section) {
                gsap.fromTo(section,
                    {
                        y: 40,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });
        }