export const handleSectionNavigation = (id) => {
    // Attempt to find the element by ID
    const element = document.getElementById(id);
  
    // Define an offset to account for any fixed elements like a header
    const offset = 45;
  
    // Get the position of the top of the body element relative to the viewport
    const bodyRect = document.body.getBoundingClientRect().top;
  
    // Use optional chaining to safely access the top position of the element
    // If the element is not found (null or undefined), default to 0
    const elementRect = element?.getBoundingClientRect().top ?? 0;
  
    // Calculate the position of the element relative to the document
    const elementPosition = elementRect - bodyRect;
  
    // Adjust the position by the offset
    const offsetPosition = elementPosition - offset;
  
    // Scroll to the calculated position smoothly
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  