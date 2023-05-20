// Get references to the form and container elements
const form = document.getElementById('plannerForm');
const checklistContainer = document.getElementById('checklistContainer');
const emergencyContactsContainer = document.getElementById('emergencyContacts');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected values from the form
  const helpType = document.getElementById('helpType').value;
  const country = document.getElementById('country').value;
  const disasterType = document.getElementById('disasterType').value;

  // Generate the checklist based on the selected values
  const checklist = generateChecklist(helpType, country, disasterType);
  checklistContainer.innerHTML = checklist;
  checklistContainer.style.display = 'block';

  // Get the emergency contact numbers based on the selected country
  const emergencyContacts = getEmergencyContacts(country);
  emergencyContactsContainer.innerHTML = emergencyContacts;
  emergencyContactsContainer.style.display = 'block';
});

/*// Function to generate the checklist based on selected values
function generateChecklist(helpType, country, disasterType) {
  // Customize this function according to your needs
  // You can use if statements, switch cases, or retrieve data from an external source

  let checklist = '';

  if (helpType === 'individual') {
    checklist += '<h2>Individual Checklist</h2>';
    // Add individual checklist items here based on the selected disasterType and country
  } else if (helpType === 'community') {
    checklist += '<h2>Community Checklist</h2>';
    // Add community checklist items here based on the selected disasterType and country
  }

  return checklist;
}

// Function to retrieve the emergency contact numbers based on selected country
function getEmergencyContacts(country) {
  // Customize this function according to your needs
  // You can use if statements, switch cases, or retrieve data from an external source

  let emergencyContacts = '';

  // Add emergency contact numbers for the selected country
  // You can format them as desired, for example:
  emergencyContacts += '<h2>Emergency Contact Numbers</h2>';
  emergencyContacts += '<ul>';
  emergencyContacts += '<li>Emergency Number 1: xxx-xxx-xxxx</li>';
  emergencyContacts += '<li>Emergency Number 2: xxx-xxx-xxxx</li>';
  emergencyContacts += '<li>Emergency Number 3: xxx-xxx-xxxx</li>';
  emergencyContacts += '</ul>';

  return emergencyContacts;
}*/


// Function to generate the checklist based on selected values
function generateChecklist(helpType, country, disasterType) {
    let checklist = '';
  
    if (helpType === 'individual') {
      checklist += '<h2>Individual Checklist</h2>';
  
      if (country === 'country1') {
        // Checklist for Country 1
        if (disasterType === 'disaster1') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 1 in Country 1</li>';
          checklist += '<li>Item 2 for Disaster 1 in Country 1</li>';
          checklist += '<li>Item 3 for Disaster 1 in Country 1</li>';
          checklist += '</ul>';
        } else if (disasterType === 'disaster2') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 2 in Country 1</li>';
          checklist += '<li>Item 2 for Disaster 2 in Country 1</li>';
          checklist += '<li>Item 3 for Disaster 2 in Country 1</li>';
          checklist += '</ul>';
        }
      } else if (country === 'country2') {
        // Checklist for Country 2
        if (disasterType === 'disaster1') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 1 in Country 2</li>';
          checklist += '<li>Item 2 for Disaster 1 in Country 2</li>';
          checklist += '<li>Item 3 for Disaster 1 in Country 2</li>';
          checklist += '</ul>';
          checklist += '<p>';
          checklist += 'This is just a precaution line';
          checklist += '</p>';
        } else if (disasterType === 'disaster2') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 2 in Country 2</li>';
          checklist += '<li>Item 2 for Disaster 2 in Country 2</li>';
          checklist += '<li>Item 3 for Disaster 2 in Country 2</li>';
          checklist += '</ul>';
        }
      } else if (country === 'India') {
        // Checklist for Country 2
        if (disasterType === 'Earthquack') {
          checklist += '<ul>';
          checklist += '<li>Stay calm: Try to remain calm and avoid panicking. Clear thinking and quick decision-making are crucial during emergencies.</li>';
          checklist += '<li>Drop, Cover, and Hold On: Remember the phrase "Drop, Cover, and Hold On." Drop to the ground, take cover under a sturdy piece of furniture, and hold on until the shaking stops. Protect your head and neck during the earthquake.</li>';
          checklist += '<li>Stay indoors: If you are already inside a building, stay there. Moving during the shaking can be dangerous due to falling objects or debris. Avoid using elevators during the earthquake.</li>';
          checklist += '<li>Stay away from windows: Move away from windows, glass, and other items that could shatter during the earthquake. Protect yourself from potential injuries caused by broken glass.</li>';
          checklist += '<li>Stay clear of hazards: Avoid being near heavy furniture, bookshelves, cabinets, or appliances that could topple over during the shaking. Keep a safe distance from light fixtures, ceiling fans, or other items that may fall.</li>';
          checklist += '<li>Stay in open areas: If you are outdoors, move to an open area away from buildings, streetlights, trees, and utility wires. Avoid tall structures that may pose a risk of collapsing or falling debris.</li>';
          checklist += '<li>Follow evacuation procedures: If you are in a high-rise building, follow the evacuation procedures if instructed to do so. Use stairs rather than elevators and be cautious of potential hazards in stairwells.</li>';
          checklist += '<li>Be aware of aftershocks: Aftershocks often occur after the main earthquake. Be prepared for additional shaking and take necessary precautions. Aftershocks can cause further damage to already weakened structures.</li>';
          checklist += '<li>Keep emergency supplies ready: Have an emergency kit readily available with essential supplies like water, non-perishable food, flashlight, batteries, first aid kit, and a battery-powered radio. Ensure your mobile phone is charged.</li>';
          checklist += '<li>Stay informed: Listen to updates and instructions from local authorities via radio, television, or official communication channels. Follow their guidance and be aware of any evacuation or safety procedures.</li>';
          checklist += '<li>Check on others: If it is safe to do so, check on family members, neighbors, or colleagues to ensure their well-being and offer assistance if needed.</li>';
          checklist += '</ul>';
          checklist += '<p>';
          checklist += 'Remember, the specific precautions may vary depending on your location and the severity of the earthquake. It is essential to stay informed about local emergency procedures and follow the instructions provided by authorities to ensure your safety during and after an earthquake.';
          checklist += '</p>';
        }
      }
    } else if (helpType === 'community') {
      checklist += '<h2>Community Checklist</h2>';
  
      if (country === 'country1') {
        // Checklist for Country 1
        if (disasterType === 'disaster1') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 1 in Country 1 (Community)</li>';
          checklist += '<li>Item 2 for Disaster 1 in Country 1 (Community)</li>';
          checklist += '<li>Item 3 for Disaster 1 in Country 1 (Community)</li>';
          checklist += '</ul>';
        } else if (disasterType === 'disaster2') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 2 in Country 1 (Community)</li>';
          checklist += '<li>Item 2 for Disaster 2 in Country 1 (Community)</li>';
          checklist += '<li>Item 3 for Disaster 2 in Country 1 (Community)</li>';
          checklist += '</ul>';
        }
      } else if (country === 'country2') {
        // Checklist for Country 2
        if (disasterType === 'disaster1') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 1 in Country 2 (Community)</li>';
          checklist += '<li>Item 2 for Disaster 1 in Country 2 (Community)</li>';
          checklist += '<li>Item 3 for Disaster 1 in Country 2 (Community)</li>';
          checklist += '</ul>';
        } else if (disasterType === 'disaster2') {
          checklist += '<ul>';
          checklist += '<li>Item 1 for Disaster 2 in Country 2 (Community)</li>';
          checklist += '<li>Item 2 for Disaster 2 in Country 2 (Community)</li>';
          checklist += '<li>Item 3 for Disaster 2 in Country 2 (Community)</li>';
          checklist += '</ul>';
        }
      } else if (country === 'India') {
        // Checklist for Country 2
        if (disasterType === 'Earthquack') {
          checklist += '<ul>';
          checklist += '<li>Alert everyone: Immediately inform all members of the community or group about the earthquake alert. Use established communication channels, such as public address systems, text messages, or community apps, to relay the message effectively.</li>';
          checklist += '<li>Designate assembly points: Identify safe assembly points within the community or group where members can gather during and after the earthquake. These points should be open spaces away from buildings, trees, and utility wires.</li>';
          checklist += '<li>Conduct drills and trainings: Regularly conduct earthquake drills and trainings to ensure everyone is familiar with evacuation procedures, safe sheltering techniques, and communication protocols during emergencies.</li>';
          checklist += '<li>Assess and secure buildings: Evaluate buildings and structures within the community for potential vulnerabilities. Strengthen weak structures, ensure proper anchoring of heavy objects, and reinforce critical infrastructure to minimize damage.</li>';
          checklist += '<li>Establish communication channels: Set up a reliable communication network within the community or group. This can include designated coordinators, communication trees, or walkie-talkies to share information and coordinate emergency response efforts.</li>';
          checklist += '<li>Organize search and rescue teams: Establish search and rescue teams within the community or group. Train members on basic first aid, emergency response protocols, and techniques for locating and assisting individuals who may be trapped or injured.</li>';
          checklist += '<li>Create emergency supply kits: Encourage community members to have individual emergency supply kits with essential items such as water, non-perishable food, flashlights, batteries, first aid supplies, and blankets. Additionally, consider maintaining communal emergency supplies for distribution if needed.</li>';
          checklist += '<li>Develop a neighborhood support system: Foster a sense of community by encouraging neighbors to check on each other, especially vulnerable individuals such as the elderly, children, or those with special needs. Establish a system to ensure their well-being and provide assistance if required.</li>';
          checklist += '<li>Collaborate with local authorities: Maintain regular communication with local emergency management agencies, and follow their guidance and instructions during an earthquake or other emergencies. Collaborate with them for training sessions, resource sharing, and community-wide emergency preparedness initiatives.</li>';
          checklist += '<li>Review and update plans: Regularly review and update community emergency response plans based on lessons learned from drills, exercises, and real-life events. Ensure that plans are adaptable and account for specific risks and challenges in the community.</li>';
          checklist += '</ul>';
          checklist += '<p>';
          checklist += 'Remember, effective coordination, communication, and collective action are crucial for ensuring the safety and well-being of a community or group during an earthquake. Encourage everyone to stay informed, stay together, and support each other throughout the emergency situation.';
          checklist += '</p>';
        }
      }
    }
  
    return checklist;
  }
  
  // Function to retrieve the emergency contact numbers based on selected country
  function getEmergencyContacts(country) {
    let emergencyContacts = '';
  
    if (country === 'country1') {
      emergencyContacts += '<h2>Emergency Contact Numbers for Country 1</h2>';
      emergencyContacts += '<ul>';
      emergencyContacts += '<li>Emergency Number 1: xxx-xxx-xxxx</li>';
      emergencyContacts += '<li>Emergency Number 2: xxx-xxx-xxxx</li>';
      emergencyContacts += '<li>Emergency Number 3: xxx-xxx-xxxx</li>';
      emergencyContacts += '</ul>';
    } else if (country === 'country2') {
      emergencyContacts += '<h2>Emergency Contact Numbers for Country 2</h2>';
      emergencyContacts += '<ul>';
      emergencyContacts += '<li>Emergency Number 1: xxx-xxx-xxxx</li>';
      emergencyContacts += '<li>Emergency Number 2: xxx-xxx-xxxx</li>';
      emergencyContacts += '<li>Emergency Number 3: xxx-xxx-xxxx</li>';
      emergencyContacts += '</ul>';
    } else if (country === 'India') {
        emergencyContacts += '<h2>Emergency Contact Numbers for India</h2>';
        emergencyContacts += '<ul>';
        emergencyContacts += '<li>National Emergency Helpline: 112</li>';
        emergencyContacts += '<li>Local Police: 100</li>';
        emergencyContacts += '<li>Fire Brigade: 101</li>';
        emergencyContacts += '<li>Ambulance: 102</li>';
        emergencyContacts += '<li>Emergency Disaster Management: 108</li>';
        emergencyContacts += '</ul>';
    }
  
    return emergencyContacts;
  }
  