export const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2); 
  };
  
  export const getAvatarColor = (name: string): string => {
    const colors = [
      "#7dd3fc",  
      "#86efac",  
      "#fde047", 
      "#fdba74",  
      "#c4b5fd",  
      "#fca5a5",  
    ];
  
    // implement hash from name to pick a color
    const index = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  
    return colors[index];
  };    