import React, { useState } from 'react';
import { MapPin, DollarSign, Calendar, Users, Plane, Hotel, Camera, Utensils, Star, Clock, ArrowRight, Globe, Map, Thermometer, Wifi, Car } from 'lucide-react';

const TripDestinationGenerator = () => {
  const [formData, setFormData] = useState({
    budget: '',
    duration: '',
    travelers: '',
    travelStyle: '',
    season: '',
    interests: []
  });
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [loading, setLoading] = useState(false);

  const travelStyles = ['Budget', 'Mid-range', 'Luxury'];
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'Any'];
  const interests = [
    'Adventure', 'Culture', 'Food', 'Nature', 'History', 'Shopping', 
    'Nightlife', 'Art', 'Beach', 'Mountains', 'Photography', 'Wildlife'
  ];

  // Inbuilt AI destination database
  const destinationDatabase = {
    budget: {
      low: [
        {
          name: 'Goa, India',
          country: 'India',
          avgCost: { min: 300, max: 600 },
          highlights: ['Beaches', 'Nightlife', 'Portuguese Architecture'],
          bestSeason: ['Fall', 'Winter'],
          activities: ['Beach hopping', 'Water sports', 'Local markets'],
          accommodation: 'Beach resorts, hostels',
          climate: 'Tropical',
          rating: 4.3
        },
        {
          name: 'Bali, Indonesia',
          country: 'Indonesia',
          avgCost: { min: 400, max: 700 },
          highlights: ['Temples', 'Rice Terraces', 'Beaches'],
          bestSeason: ['Spring', 'Summer', 'Fall'],
          activities: ['Temple visits', 'Surfing', 'Yoga retreats'],
          accommodation: 'Villas, boutique hotels',
          climate: 'Tropical',
          rating: 4.5
        },
        {
          name: 'Prague, Czech Republic',
          country: 'Czech Republic',
          avgCost: { min: 500, max: 800 },
          highlights: ['Medieval Architecture', 'Beer Culture', 'Castle'],
          bestSeason: ['Spring', 'Summer', 'Fall'],
          activities: ['Castle tours', 'Beer tasting', 'Old town walks'],
          accommodation: 'Historic hotels, hostels',
          climate: 'Continental',
          rating: 4.4
        }
      ],
      medium: [
        {
          name: 'Tokyo, Japan',
          country: 'Japan',
          avgCost: { min: 1200, max: 2000 },
          highlights: ['Modern Culture', 'Traditional Temples', 'Cuisine'],
          bestSeason: ['Spring', 'Fall'],
          activities: ['Temple visits', 'Food tours', 'Shopping'],
          accommodation: 'Modern hotels, ryokans',
          climate: 'Temperate',
          rating: 4.7
        },
        {
          name: 'Barcelona, Spain',
          country: 'Spain',
          avgCost: { min: 800, max: 1400 },
          highlights: ['Gaudi Architecture', 'Beaches', 'Tapas'],
          bestSeason: ['Spring', 'Summer', 'Fall'],
          activities: ['Architecture tours', 'Beach time', 'Food tours'],
          accommodation: 'Boutique hotels, apartments',
          climate: 'Mediterranean',
          rating: 4.6
        },
        {
          name: 'Dubai, UAE',
          country: 'UAE',
          avgCost: { min: 1000, max: 1800 },
          highlights: ['Luxury Shopping', 'Desert Safari', 'Modern Architecture'],
          bestSeason: ['Fall', 'Winter', 'Spring'],
          activities: ['Desert safari', 'Shopping', 'Burj Khalifa'],
          accommodation: 'Luxury hotels, resorts',
          climate: 'Desert',
          rating: 4.5
        }
      ],
      high: [
        {
          name: 'Paris, France',
          country: 'France',
          avgCost: { min: 2000, max: 3500 },
          highlights: ['Art Museums', 'Cuisine', 'Romance'],
          bestSeason: ['Spring', 'Summer', 'Fall'],
          activities: ['Museum visits', 'Fine dining', 'Seine cruise'],
          accommodation: 'Luxury hotels, boutique stays',
          climate: 'Temperate',
          rating: 4.8
        },
        {
          name: 'Maldives',
          country: 'Maldives',
          avgCost: { min: 3000, max: 6000 },
          highlights: ['Overwater Bungalows', 'Diving', 'Luxury Resorts'],
          bestSeason: ['Fall', 'Winter', 'Spring'],
          activities: ['Snorkeling', 'Spa treatments', 'Water sports'],
          accommodation: 'Luxury resorts, overwater villas',
          climate: 'Tropical',
          rating: 4.9
        },
        {
          name: 'Swiss Alps, Switzerland',
          country: 'Switzerland',
          avgCost: { min: 2500, max: 4500 },
          highlights: ['Mountain Views', 'Skiing', 'Luxury'],
          bestSeason: ['Winter', 'Summer'],
          activities: ['Skiing', 'Hiking', 'Scenic train rides'],
          accommodation: 'Alpine resorts, chalets',
          climate: 'Alpine',
          rating: 4.7
        }
      ]
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const getDestinationsByBudget = (budget, duration, travelers) => {
    const budgetPerPerson = parseInt(budget) / parseInt(travelers);
    const dailyBudget = budgetPerPerson / parseInt(duration);
    
    let category;
    if (dailyBudget < 100) category = 'low';
    else if (dailyBudget < 200) category = 'medium';
    else category = 'high';

    return destinationDatabase.budget[category] || [];
  };

  const filterDestinationsByPreferences = (destinations) => {
    return destinations.filter(dest => {
      // Season filtering
      if (formData.season && formData.season !== 'Any') {
        if (!dest.bestSeason.includes(formData.season)) return false;
      }
      
      // Interest filtering
      if (formData.interests.length > 0) {
        const hasMatchingInterest = formData.interests.some(interest => 
          dest.highlights.some(highlight => 
            highlight.toLowerCase().includes(interest.toLowerCase()) ||
            dest.activities.some(activity => 
              activity.toLowerCase().includes(interest.toLowerCase())
            )
          )
        );
        if (!hasMatchingInterest) return false;
      }
      
      return true;
    });
  };

  const generateItinerary = (destination, duration) => {
    const days = parseInt(duration);
    const itinerary = [];
    
    const baseActivities = {
      'Goa, India': [
        'Beach relaxation at Baga Beach',
        'Spice plantation tour',
        'Old Goa churches visit',
        'Water sports at Calangute',
        'Sunset at Anjuna Beach',
        'Local market shopping',
        'Portuguese architecture tour'
      ],
      'Bali, Indonesia': [
        'Ubud rice terraces visit',
        'Temple hopping tour',
        'Surfing at Kuta Beach',
        'Volcano sunrise trek',
        'Traditional Balinese spa',
        'Art villages exploration',
        'Sunset at Tanah Lot'
      ],
      'Tokyo, Japan': [
        'Senso-ji Temple visit',
        'Tsukiji Fish Market tour',
        'Shibuya crossing experience',
        'Cherry blossom viewing',
        'Meiji Shrine visit',
        'Harajuku fashion district',
        'Tokyo Skytree observation'
      ],
      'Paris, France': [
        'Eiffel Tower visit',
        'Louvre Museum tour',
        'Seine River cruise',
        'Montmartre district walk',
        'Versailles Palace day trip',
        'Latin Quarter exploration',
        'Champs-Élysées shopping'
      ]
    };

    const activities = baseActivities[destination.name] || [
      'City walking tour',
      'Local cuisine experience',
      'Cultural site visits',
      'Shopping and markets',
      'Scenic viewpoints',
      'Local transportation',
      'Relaxation time'
    ];

    for (let day = 1; day <= days; day++) {
      const dayActivities = [];
      const numActivities = day === 1 || day === days ? 2 : 3;
      
      for (let i = 0; i < numActivities; i++) {
        const activityIndex = ((day - 1) * numActivities + i) % activities.length;
        const times = ['9:00 AM', '2:00 PM', '7:00 PM'];
        const costs = [25, 35, 45, 55, 65];
        
        dayActivities.push({
          time: times[i] || '10:00 AM',
          activity: activities[activityIndex],
          cost: costs[Math.floor(Math.random() * costs.length)]
        });
      }

      itinerary.push({
        day,
        title: day === 1 ? 'Arrival & Exploration' : 
               day === days ? 'Final Day & Departure' : 
               `Day ${day} Adventures`,
        activities: dayActivities
      });
    }

    return itinerary;
  };

  const generateDestinations = async () => {
    setLoading(true);
    setSelectedDestination(null);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const budget = parseInt(formData.budget);
    const duration = parseInt(formData.duration);
    const travelers = parseInt(formData.travelers);
    
    // Get destinations by budget
    let availableDestinations = getDestinationsByBudget(budget, duration, travelers);
    
    // Filter by preferences
    availableDestinations = filterDestinationsByPreferences(availableDestinations);
    
    // If no destinations match, fall back to budget-appropriate ones
    if (availableDestinations.length === 0) {
      availableDestinations = getDestinationsByBudget(budget, duration, travelers);
    }
    
    // Calculate actual costs for each destination
    const destinationsWithCost = availableDestinations.map(dest => {
      const baseCost = dest.avgCost.min + Math.random() * (dest.avgCost.max - dest.avgCost.min);
      const totalCost = Math.min(budget, baseCost * travelers);
      
      return {
        ...dest,
        calculatedCost: Math.floor(totalCost),
        costPerPerson: Math.floor(totalCost / travelers),
        budgetUtilization: Math.floor((totalCost / budget) * 100),
        itinerary: generateItinerary(dest, duration)
      };
    });
    
    setDestinations(destinationsWithCost.slice(0, 3)); // Show top 3 recommendations
    setLoading(false);
  };

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleSubmit = () => {
    if (formData.budget && formData.duration && formData.travelers) {
      generateDestinations();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-3 rounded-xl">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                AI Travel Destination Finder
              </h1>
              <p className="text-gray-600">Discover perfect destinations within your budget using AI recommendations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Planning Form */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                Find Your Destination
              </h2>

              <div className="space-y-4">
                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign className="h-4 w-4 inline mr-1" />
                    Total Budget (RUPEES)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g., 2000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Duration (Days)
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select duration</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                    <option value="10">10 Days</option>
                    <option value="14">14 Days</option>
                  </select>
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="h-4 w-4 inline mr-1" />
                    Number of Travelers
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5+ People</option>
                  </select>
                </div>

                {/* Travel Style */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Star className="h-4 w-4 inline mr-1" />
                    Travel Style
                  </label>
                  <select
                    name="travelStyle"
                    value={formData.travelStyle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Any Style</option>
                    {travelStyles.map(style => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>

                {/* Season */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Thermometer className="h-4 w-4 inline mr-1" />
                    Preferred Season
                  </label>
                  <select
                    name="season"
                    value={formData.season}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Any Season</option>
                    {seasons.map(season => (
                      <option key={season} value={season}>{season}</option>
                    ))}
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Camera className="h-4 w-4 inline mr-1" />
                    Interests
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${
                          formData.interests.includes(interest)
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !formData.budget || !formData.duration || !formData.travelers}
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Finding Destinations...</span>
                    </>
                  ) : (
                    <>
                      <span>Find Destinations</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="xl:col-span-2">
            {!destinations.length && !loading && !selectedDestination ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <Map className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Discover Amazing Destinations</h3>
                <p className="text-gray-500">Enter your budget and preferences to get AI-powered destination recommendations</p>
              </div>
            ) : loading ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">AI is Analyzing Your Preferences</h3>
                <p className="text-gray-500">Finding the perfect destinations within your budget...</p>
              </div>
            ) : selectedDestination ? (
              /* Detailed Destination View */
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{selectedDestination.name}</h2>
                        <p className="text-emerald-100">{selectedDestination.country}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">${selectedDestination.calculatedCost}</div>
                        <div className="text-sm text-emerald-100">Total Cost</div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">Per Person</div>
                        <div>${selectedDestination.costPerPerson}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Budget Used</div>
                        <div>{selectedDestination.budgetUtilization}%</div>
                      </div>
                      <div>
                        <div className="font-semibold">Rating</div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current mr-1" />
                          {selectedDestination.rating}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">Climate</div>
                        <div>{selectedDestination.climate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
                        <div className="space-y-1">
                          {selectedDestination.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full mr-2"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Best Activities</h3>
                        <div className="space-y-1">
                          {selectedDestination.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-3">Accommodation</h3>
                      <p className="text-gray-600 text-sm">{selectedDestination.accommodation}</p>
                    </div>
                  </div>
                </div>

                {/* Itinerary */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested Itinerary</h3>
                  <div className="space-y-4">
                    {selectedDestination.itinerary.map((day) => (
                      <div key={day.day} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Day {day.day}: {day.title}</h4>
                        <div className="space-y-2">
                          {day.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-600 font-medium">{activity.time}</span>
                                <span className="text-sm">{activity.activity}</span>
                              </div>
                              <span className="text-emerald-600 font-medium text-sm">${activity.cost}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDestination(null)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  ← Back to Destinations
                </button>
              </div>
            ) : (
              /* Destination Cards */
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">AI Recommended Destinations</h2>
                  <p className="text-gray-600 text-sm mb-6">Based on your budget of Rs{formData.budget} for {formData.travelers} travelers</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destinations.map((destination, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => selectDestination(destination)}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">{destination.name}</h3>
                            <p className="text-gray-500 text-sm">{destination.country}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-emerald-600">${destination.calculatedCost}</div>
                            <div className="text-xs text-gray-500">Total cost</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                              {destination.rating}
                            </div>
                            <div className="flex items-center">
                              <Thermometer className="h-4 w-4 mr-1" />
                              {destination.climate}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {destination.highlights.slice(0, 3).map((highlight, i) => (
                              <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <div>${destination.costPerPerson} per person</div>
                            <div>{destination.budgetUtilization}% of budget</div>
                          </div>
                          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDestinationGenerator;