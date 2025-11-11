/**
 * Detect user's country using IP geolocation
 * Returns country code (e.g., 'IN' for India, 'US' for United States)
 */
export async function detectCountry() {
  try {
    // Try multiple geolocation services for reliability
    const services = [
      'https://ipapi.co/json/',
      'https://ip-api.com/json/',
      'https://ipinfo.io/json'
    ];

    for (const service of services) {
      try {
        const response = await fetch(service);
        if (response.ok) {
          const data = await response.json();
          // Different services use different field names
          const countryCode = data.country_code || data.countryCode || data.country;
          if (countryCode) {
            console.log(`Detected country: ${countryCode} from ${service}`);
            return countryCode;
          }
        }
      } catch (error) {
        console.warn(`Failed to fetch from ${service}:`, error);
        continue;
      }
    }

    // If all services fail, return null
    console.warn('All geolocation services failed');
    return null;
  } catch (error) {
    console.error('Error detecting country:', error);
    return null;
  }
}

/**
 * Check if user is from India
 */
export async function isFromIndia() {
  const country = await detectCountry();
  return country === 'IN';
}
