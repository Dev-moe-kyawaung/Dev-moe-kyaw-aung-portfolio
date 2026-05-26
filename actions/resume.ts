"use server";

export async function downloadResume() {
  // Return the resume file path
  return { 
    success: true, 
    url: "/resume/Moe-Kyaw-Aung-Resume.pdf" 
  };
}

export async function trackResumeDownload() {
  // Track analytics for resume downloads
  // You could integrate with Google Analytics or your own analytics system
  console.log("Resume download tracked");
  return { success: true };
}
