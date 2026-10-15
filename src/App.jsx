// import React, { useState, useMemo } from 'react';
// import {
//   Receipt,
//   Leaf,
//   Zap,
//   Car,
//   Coffee,
//   TrendingDown,
//   BarChart3,
//   CheckCircle2,
//   Sparkles,
//   Flame,
//   ArrowRight,
//   RefreshCw,
//   Award,
//   Sliders,
//   CheckSquare,
//   Square,
//   Table,
//   HeartHandshake,
//   Trees,
//   ShieldCheck,
//   Trophy,
//   Quote,
//   BookOpen,
//   Lock,
//   Unlock
// } from 'lucide-react';

// const TRANSPORT_MODES = [
//   { id: 'metro_bus', label: 'Metro / Public Bus / Suburban Train', factorPerKm: 0.035, unitLabel: '0.035 kg CO₂e / km', badge: 'Low Carbon', desc: 'Shared mass transit with high passenger efficiency' },
//   { id: 'ev_scooter', label: 'Electric Two-Wheeler / EV / Bicycle', factorPerKm: 0.022, unitLabel: '0.022 kg CO₂e / km', badge: 'Ultra Low', desc: 'Zero tailpipe emissions; minimal grid charging footprint' },
//   { id: 'petrol_bike', label: 'Petrol Two-Wheeler / Scooter', factorPerKm: 0.068, unitLabel: '0.068 kg CO₂e / km', badge: 'Moderate', desc: 'Standard 110cc–150cc commuter motorcycle or scooter' },
//   { id: 'shared_auto', label: 'Shared Auto / Carpool (3+ Riders)', factorPerKm: 0.075, unitLabel: '0.075 kg CO₂e / km', badge: 'Moderate', desc: 'Splits vehicle fuel emissions across multiple passengers' },
//   { id: 'solo_car', label: 'Solo Car (Petrol / Diesel Hatchback/SUV)', factorPerKm: 0.192, unitLabel: '0.192 kg CO₂e / km', badge: 'High Impact', desc: 'Single-occupant combustion vehicle in city traffic' }
// ];

// const DISTANCE_BRACKETS = [
//   { id: 'short', label: 'Short (< 5 km / day)', kmPerDay: 4 },
//   { id: 'medium', label: 'Medium (5 – 15 km / day)', kmPerDay: 10 },
//   { id: 'long', label: 'Long (15 – 30 km / day)', kmPerDay: 22 },
//   { id: 'extended', label: 'Extended (35+ km / day)', kmPerDay: 38 }
// ];

// const AC_USAGE_OPTIONS = [
//   { id: 'fan_only', label: 'Ceiling Fan / Natural Ventilation Only', kwhPerDay: 0.9, desc: 'BLDC / standard ceiling fan (~50–75W for 12–14 hrs)' },
//   { id: 'eco_ac', label: 'AC 3 hrs/night at 26°C Eco Mode + Fan', kwhPerDay: 3.2, desc: 'Inverter split AC run briefly before sleep with timer' },
//   { id: 'standard_ac', label: 'AC 7 hrs/night at 22°C – 24°C', kwhPerDay: 7.5, desc: 'Full-night bedroom cooling on standard compressor load' },
//   { id: 'heavy_ac', label: 'Heavy AC (10+ hrs/day at 18°C – 21°C)', kwhPerDay: 12.4, desc: 'Day + night cooling with high thermal differential' }
// ];

// const APPLIANCE_OPTIONS = [
//   { id: 'minimal_tech', label: 'Laptop + Phone (Unplugged When Full)', kwhPerDay: 0.8, desc: 'Smart power strip, LED lighting, zero phantom standby load' },
//   { id: 'standard_home', label: 'Laptop + Monitor + Fridge + Water Heater', kwhPerDay: 2.6, desc: 'Typical student apartment / family room appliance usage' },
//   { id: 'heavy_rig', label: 'Gaming Desktop + Multi-Monitor + Always-On', kwhPerDay: 5.2, desc: 'High-wattage GPU workstation + 24/7 standby devices' }
// ];

// const DISPOSABLE_CUPS_OPTIONS = [
//   { id: 'reusable_bottle', label: 'Reusable Bottle & Mug (0 Disposables)', kgCo2PerDay: 0.02, itemCountLabel: '0 single-use items/day', desc: 'Steel/glass bottle refilled at campus or office stations' },
//   { id: 'light_cups', label: '1 – 2 Paper / Plastic Tea or Coffee Cups / day', kgCo2PerDay: 0.18, itemCountLabel: '2 disposable cups/day', desc: 'Poly-coated paper cups or small plastic water bottles' },
//   { id: 'heavy_bottles', label: '3+ PET Plastic Bottles / Takeaway Cups / day', kgCo2PerDay: 0.55, itemCountLabel: '4 PET bottles & cups/day', desc: 'Frequent single-use beverage bottles, straws, and lids' }
// ];

// const FOOD_PACKAGING_OPTIONS = [
//   { id: 'home_mess', label: 'Home / Hostel Mess Meals (Reusable Plates)', kgCo2PerDay: 0.05, itemCountLabel: '0 takeaway boxes/wk', desc: 'Dine-in or steel tiffin carrier with zero plastic waste' },
//   { id: 'occasional_takeaway', label: '2 – 3 Takeaway / Delivery Orders per Week', kgCo2PerDay: 0.28, itemCountLabel: '3 takeaway boxes/wk', desc: 'Cardboard/foil parcels a few times a week' },
//   { id: 'daily_delivery', label: 'Daily App Food Delivery (Plastic Tubs + Cutlery)', kgCo2PerDay: 0.78, itemCountLabel: '7+ plastic meal kits/wk', desc: 'Black polypropylene containers, sachets, and carry bags daily' }
// ];

// const GRID_ELECTRICITY_FACTOR = 0.72;

// const DEMO_PRESETS = [
//   { id: 'commuter', name: 'Urban Solo Commuter', tag: 'High Footprint Demo', transportMode: 'solo_car', distanceBracket: 'long', acUsage: 'standard_ac', applianceUsage: 'standard_home', disposableCups: 'light_cups', foodPackaging: 'daily_delivery' },
//   { id: 'student', name: 'Typical Campus Student', tag: 'Balanced Demo', transportMode: 'petrol_bike', distanceBracket: 'medium', acUsage: 'eco_ac', applianceUsage: 'standard_home', disposableCups: 'light_cups', foodPackaging: 'occasional_takeaway' },
//   { id: 'eco_champ', name: 'Green Transit Minimalist', tag: 'Low-Carbon Target', transportMode: 'metro_bus', distanceBracket: 'medium', acUsage: 'fan_only', applianceUsage: 'minimal_tech', disposableCups: 'reusable_bottle', foodPackaging: 'home_mess' }
// ];

// const WEEKLY_CHALLENGES = [
//   { id: 'ch-1', title: 'Zero-Plastic Hydration Week', reward: '+150 Eco Points', points: 150, category: 'Waste', difficulty: 'Easy', desc: 'Carry a reusable bottle for 5 consecutive campus days instead of buying PET bottles.', targetDays: 5, completedDays: 4 },
//   { id: 'ch-2', title: '26°C Smart Cooling Streak', reward: '+200 Eco Points', points: 200, category: 'Energy', difficulty: 'Medium', desc: 'Set your room AC to 26°C with a ceiling fan to cut compressor energy by up to 24%.', targetDays: 7, completedDays: 5 },
//   { id: 'ch-3', title: 'Public Transit / Carpool Wednesdays', reward: '+120 Eco Points', points: 120, category: 'Transit', difficulty: 'Easy', desc: 'Swap solo vehicle trips for Metro, bus, or shared auto twice this week.', targetDays: 2, completedDays: 2 },
//   { id: 'ch-4', title: 'Phantom Load Vampire Hunt', reward: '+180 Eco Points', points: 180, category: 'Energy', difficulty: 'Medium', desc: 'Unplug laptop bricks, monitor power strips, and chargers before bed for 6 nights.', targetDays: 6, completedDays: 3 },
//   { id: 'ch-5', title: 'Zero-Cutlery Delivery Pledge', reward: '+140 Eco Points', points: 140, category: 'Waste', difficulty: 'Easy', desc: 'Opt out of plastic cutlery, straws, and extra tissues on 4 consecutive food orders.', targetDays: 4, completedDays: 3 },
//   { id: 'ch-6', title: 'Last-Mile Active Walkathon', reward: '+250 Eco Points', points: 250, category: 'Transit', difficulty: 'Hard', desc: 'Replace all <2 km auto/scooter hops with walking or cycling for a full 7-day cycle.', targetDays: 7, completedDays: 5 }
// ];

// const MOTIVATIONAL_QUOTES = [
//   {
//     quote: "We don't need a handful of people doing zero waste perfectly. We need millions of people doing it imperfectly.",
//     author: "Anne Marie Bonneau",
//     role: "Zero-Waste Chef & Environmental Advocate",
//     statHighlight: "10,000 students skipping 1 plastic bottle/day diverts 3.65 million bottles from landfills annually."
//   },
//   {
//     quote: "The greatest threat to our planet is the belief that someone else will save it.",
//     author: "Robert Swan",
//     role: "Polar Explorer & Clean Energy Leader",
//     statHighlight: "Shifting AC thermostats from 20°C to 26°C across a single 500-room hostel saves ~185,000 kWh per year."
//   },
//   {
//     quote: "You cannot get through a single day without having an impact on the world around you. What you do makes a difference.",
//     author: "Dr. Jane Goodall",
//     role: "Ethologist & Conservationist",
//     statHighlight: "One commuter switching from a solo car to Metro rail 3 days a week cuts 640 kg of CO₂e every year."
//   },
//   {
//     quote: "Sustainability is no longer about doing less harm. It's about doing more good—one measurable habit at a time.",
//     author: "Jochen Zeitz",
//     role: "Sustainability Strategist",
//     statHighlight: "Phantom standby power accounts for 5% to 10% of residential electricity bills without delivering a single watt of utility."
//   }
// ];

// const STATISTICAL_FIGURES = [
//   {
//     id: 'stat-ac',
//     category: 'Cooling & Grid Energy',
//     headline: '6% Electricity Saved Per +1°C on AC Thermostat',
//     metric: '24%–30% Load Cut',
//     source: 'Bureau of Energy Efficiency (BEE India) & CEA Grid Study',
//     explanation: 'Running an AC at 26°C with a ceiling fan feels just as cool as 22°C due to convective air movement, while cutting compressor runtime by nearly a third.',
//     comparisonLabel: '20°C Heavy AC (8.96 kg CO₂e/day) vs 26°C Eco Mode (2.30 kg CO₂e/day)',
//     barPct: 74
//   },
//   {
//     id: 'stat-transit',
//     category: 'Urban Commute',
//     headline: 'Metro & Bus Emit 81% Less CO₂e Per Passenger-Km Than Solo Cars',
//     metric: '0.035 vs 0.192 kg/km',
//     source: 'India GHG Program & WRI Urban Mobility Benchmark',
//     explanation: 'A single-occupant hatchback in city traffic burns fuel mostly moving 1,200 kg of steel. Mass transit distributes traction energy across hundreds of riders.',
//     comparisonLabel: 'Metro Rail (35g/km) vs Two-Wheeler (68g/km) vs Solo Car (192g/km)',
//     barPct: 82
//   },
//   {
//     id: 'stat-plastic',
//     category: 'Single-Use Disposables',
//     headline: '1 Daily Takeaway Meal Kit Generates ~284 kg CO₂e Per Year',
//     metric: '365 Polypropylene Sets',
//     source: 'Cradle-to-Grave Polymer Packaging Lifecycle Assessment (LCA)',
//     explanation: 'Black plastic food containers are made from virgin petroleum resin and are rarely recycled due to carbon-black pigment sorting limitations.',
//     comparisonLabel: 'Steel Tiffin / Mess Plate (18 kg/yr) vs Daily Plastic Delivery (284 kg/yr)',
//     barPct: 93
//   },
//   {
//     id: 'stat-grid',
//     category: 'India Power Grid Intensity',
//     headline: 'Every 1 kWh Saved Avoids 0.72 kg of Thermal Coal Emissions',
//     metric: '0.72 kg CO₂e / kWh',
//     source: 'Central Electricity Authority (CEA) CO₂ Baseline Database',
//     explanation: 'Because peak evening electricity demand relies heavily on thermal generation, evening conservation (7 PM – 11 PM) has the highest carbon reduction leverage.',
//     comparisonLabel: 'Peak Evening Grid Impact vs Daytime Solar-Assisted Grid',
//     barPct: 68
//   }
// ];

// const BASE_LEADERBOARD_USERS = [
//   { id: 'u-1', name: 'Aarav Menon', group: 'Vadapalani Tech Block A', netWeeklyKg: 11.4, streak: 19, points: 1420, badge: 'Zero-Waste Architect' },
//   { id: 'u-2', name: 'Diya Krishnan', group: 'Green Transit Club', netWeeklyKg: 13.8, streak: 15, points: 1290, badge: 'Grid Guardian' },
//   { id: 'u-3', name: 'Rohan Subramanian', group: 'Stanza Living Cedar House', netWeeklyKg: 16.2, streak: 12, points: 1150, badge: 'Transit Pioneer' },
//   { id: 'u-4', name: 'Sneha Natarajan', group: 'CyberSec Dept Cohort', netWeeklyKg: 19.5, streak: 10, points: 980, badge: 'Eco Optimizer' },
//   { id: 'u-5', name: 'Vikramaditya R.', group: 'Hostel Block C', netWeeklyKg: 24.1, streak: 7, points: 810, badge: 'Carbon Aware' },
//   { id: 'u-6', name: 'Karthik V.', group: 'Urban Commuters Guild', netWeeklyKg: 31.8, streak: 4, points: 540, badge: 'Carbon Novice' }
// ];

// const CAMPUS_HOSTEL_LEADERBOARD = [
//   { id: 'h-1', name: 'CS & CyberSec Department Cohort', participants: 142, avgWeeklyKg: 16.8, totalSavedKg: 612, trend: '-18% this wk' },
//   { id: 'h-2', name: 'Stanza Living Off-Campus PG Network', participants: 98, avgWeeklyKg: 18.4, totalSavedKg: 445, trend: '-14% this wk' },
//   { id: 'h-3', name: 'Metro Commuters Student Chapter', participants: 210, avgWeeklyKg: 19.1, totalSavedKg: 890, trend: '-22% this wk' },
//   { id: 'h-4', name: 'Main Campus Hostel Block B', participants: 175, avgWeeklyKg: 23.6, totalSavedKg: 310, trend: '-9% this wk' }
// ];

// export default function App() {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [transportMode, setTransportMode] = useState('petrol_bike');
//   const [distanceBracket, setDistanceBracket] = useState('medium');
//   const [acUsage, setAcUsage] = useState('standard_ac');
//   const [applianceUsage, setApplianceUsage] = useState('standard_home');
//   const [disposableCups, setDisposableCups] = useState('light_cups');
//   const [foodPackaging, setFoodPackaging] = useState('occasional_takeaway');

//   const [committedRecs, setCommittedRecs] = useState({
//     transport: false,
//     electricity: false,
//     disposables: false
//   });

//   const [challenges, setChallenges] = useState(WEEKLY_CHALLENGES);
//   const [streakDays, setStreakDays] = useState(6);
//   const [streakFreezeAvailable, setStreakFreezeAvailable] = useState(true);
//   const [weekCheckins, setWeekCheckins] = useState([true, true, true, true, true, true, false]);
//   const [challengeCategory, setChallengeCategory] = useState('All');
//   const [quoteIdx, setQuoteIdx] = useState(0);
//   const [leaderboardMode, setLeaderboardMode] = useState('individuals');
//   const [toastMessage, setToastMessage] = useState(null);

//   const showToast = (msg) => {
//     setToastMessage(msg);
//     setTimeout(() => setToastMessage(null), 3200);
//   };

//   const applyPreset = (preset) => {
//     setTransportMode(preset.transportMode);
//     setDistanceBracket(preset.distanceBracket);
//     setAcUsage(preset.acUsage);
//     setApplianceUsage(preset.applianceUsage);
//     setDisposableCups(preset.disposableCups);
//     setFoodPackaging(preset.foodPackaging);
//     setCommittedRecs({ transport: false, electricity: false, disposables: false });
//     showToast(`Loaded "${preset.name}" habit profile — Receipt recalculated!`);
//   };

//   const footprintData = useMemo(() => {
//     const tMode = TRANSPORT_MODES.find((m) => m.id === transportMode) || TRANSPORT_MODES[0];
//     const dBracket = DISTANCE_BRACKETS.find((d) => d.id === distanceBracket) || DISTANCE_BRACKETS[1];
//     const acOpt = AC_USAGE_OPTIONS.find((a) => a.id === acUsage) || AC_USAGE_OPTIONS[1];
//     const appOpt = APPLIANCE_OPTIONS.find((a) => a.id === applianceUsage) || APPLIANCE_OPTIONS[1];
//     const cupOpt = DISPOSABLE_CUPS_OPTIONS.find((c) => c.id === disposableCups) || DISPOSABLE_CUPS_OPTIONS[1];
//     const foodOpt = FOOD_PACKAGING_OPTIONS.find((f) => f.id === foodPackaging) || FOOD_PACKAGING_OPTIONS[1];

//     const dailyTransportKg = +(dBracket.kmPerDay * tMode.factorPerKm).toFixed(2);
//     const dailyAcKg = +(acOpt.kwhPerDay * GRID_ELECTRICITY_FACTOR).toFixed(2);
//     const dailyApplianceKg = +(appOpt.kwhPerDay * GRID_ELECTRICITY_FACTOR).toFixed(2);
//     const dailyElectricityKg = +(dailyAcKg + dailyApplianceKg).toFixed(2);
//     const dailyCupsKg = +cupOpt.kgCo2PerDay.toFixed(2);
//     const dailyFoodPkgKg = +foodOpt.kgCo2PerDay.toFixed(2);
//     const dailyDisposablesKg = +(dailyCupsKg + dailyFoodPkgKg).toFixed(2);
//     const dailyTotalKg = +(dailyTransportKg + dailyElectricityKg + dailyDisposablesKg).toFixed(2);

//     const weeklyTransportKg = +(dailyTransportKg * 7).toFixed(2);
//     const weeklyAcKg = +(dailyAcKg * 7).toFixed(2);
//     const weeklyApplianceKg = +(dailyApplianceKg * 7).toFixed(2);
//     const weeklyElectricityKg = +(dailyElectricityKg * 7).toFixed(2);
//     const weeklyCupsKg = +(dailyCupsKg * 7).toFixed(2);
//     const weeklyFoodPkgKg = +(dailyFoodPkgKg * 7).toFixed(2);
//     const weeklyDisposablesKg = +(dailyDisposablesKg * 7).toFixed(2);
//     const weeklyTotalKg = +(weeklyTransportKg + weeklyElectricityKg + weeklyDisposablesKg).toFixed(2);

//     const recommendations = [
//       {
//         id: 'electricity',
//         category: 'Electricity & Cooling',
//         title: acOpt.id === 'fan_only' ? 'Unplug phantom standby chargers & switch to smart LED strips' : 'Set AC to 26°C Eco Timer (3 hrs) + use ceiling fan circulation',
//         positiveTip: 'Every 1°C increase in AC thermostat saves ~6% electricity with zero loss in sleep comfort!',
//         weeklySavingsKg: acOpt.id === 'fan_only' ? +(weeklyElectricityKg * 0.2).toFixed(2) : +Math.max(3.5, weeklyAcKg * 0.48).toFixed(2),
//         impactBadge: 'Biggest Bill Reducer'
//       },
//       {
//         id: 'transport',
//         category: 'Daily Commute',
//         title: tMode.id === 'metro_bus' || tMode.id === 'ev_scooter' ? 'Combine 2 weekly errands into a single trip or walk short <2 km hops' : 'Swap solo vehicle rides for Metro / Bus or Carpool 3 days a week',
//         positiveTip: 'Even a part-time switch (3 days/week) cuts commute fuel costs and emissions nearly in half.',
//         weeklySavingsKg: tMode.id === 'metro_bus' || tMode.id === 'ev_scooter' ? +(weeklyTransportKg * 0.25).toFixed(2) : +Math.max(1.8, weeklyTransportKg * 0.45).toFixed(2),
//         impactBadge: 'High Daily Leverage'
//       },
//       {
//         id: 'disposables',
//         category: 'Disposables & Packaging',
//         title: cupOpt.id === 'reusable_bottle' && foodOpt.id === 'home_mess' ? 'Bring a cloth tote bag for groceries & refuse extra paper napkins' : 'Carry a reusable steel bottle & toggle "Don\'t send plastic cutlery" on food apps',
//         positiveTip: 'Skipping single-use cups and plastic tubs keeps over 150 items out of landfills every semester.',
//         weeklySavingsKg: cupOpt.id === 'reusable_bottle' && foodOpt.id === 'home_mess' ? 0.35 : +Math.max(1.2, weeklyDisposablesKg * 0.65).toFixed(2),
//         impactBadge: 'Easiest Daily Win'
//       }
//     ];

//     const activeWeeklySavingsKg = +(
//       (committedRecs.transport ? recommendations[1].weeklySavingsKg : 0) +
//       (committedRecs.electricity ? recommendations[0].weeklySavingsKg : 0) +
//       (committedRecs.disposables ? recommendations[2].weeklySavingsKg : 0)
//     ).toFixed(2);

//     const netWeeklyKg = +Math.max(4.5, weeklyTotalKg - activeWeeklySavingsKg).toFixed(2);
//     const annualProjectedKg = Math.round(netWeeklyKg * 52);
//     const treesEquivalent = Math.max(1, Math.round((activeWeeklySavingsKg * 52) / 21));

//     const dayMultipliers = [0.95, 1.04, 0.98, 1.06, 1.02, 0.88, 0.82];
//     const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     const netDailyKg = netWeeklyKg / 7;
//     const weeklyTrend = daysOfWeek.map((day, idx) => ({
//       day,
//       kg: +(netDailyKg * dayMultipliers[idx]).toFixed(2)
//     }));

//     return {
//       tMode,
//       dBracket,
//       acOpt,
//       appOpt,
//       cupOpt,
//       foodOpt,
//       dailyTransportKg,
//       dailyAcKg,
//       dailyApplianceKg,
//       dailyElectricityKg,
//       dailyCupsKg,
//       dailyFoodPkgKg,
//       dailyDisposablesKg,
//       dailyTotalKg,
//       weeklyTransportKg,
//       weeklyAcKg,
//       weeklyApplianceKg,
//       weeklyElectricityKg,
//       weeklyCupsKg,
//       weeklyFoodPkgKg,
//       weeklyDisposablesKg,
//       weeklyTotalKg,
//       recommendations,
//       activeWeeklySavingsKg,
//       netWeeklyKg,
//       annualProjectedKg,
//       treesEquivalent,
//       weeklyTrend
//     };
//   }, [transportMode, distanceBracket, acUsage, applianceUsage, disposableCups, foodPackaging, committedRecs]);

//   // Pure Frontend Action when clicking the Save Receipt button
//   const handleSaveReceiptSnapshot = () => {
//     showToast(`Receipt Snapshot Logged (${footprintData.netWeeklyKg} kg CO₂e/wk)!`);
//   };

//   // Gamification & XP Calculation
//   const gamificationStats = useMemo(() => {
//     const basePoints = challenges.reduce((acc, c) => acc + c.completedDays * 35, 0);
//     const swapBonus = Object.values(committedRecs).filter(Boolean).length * 120;
//     const streakBonus = streakDays * 25;
//     const multiplier = streakDays >= 7 ? 1.5 : 1.2;
//     const totalXp = Math.round((basePoints + swapBonus + streakBonus) * multiplier);

//     let rankTitle = 'Carbon Novice';
//     let nextThreshold = 800;
//     if (totalXp >= 1400) {
//       rankTitle = 'Zero-Waste Architect';
//       nextThreshold = 2000;
//     } else if (totalXp >= 1000) {
//       rankTitle = 'Grid Guardian';
//       nextThreshold = 1400;
//     } else if (totalXp >= 700) {
//       rankTitle = 'Transit Pioneer';
//       nextThreshold = 1000;
//     }

//     const levelProgressPct = Math.min(100, Math.round((totalXp / nextThreshold) * 100));
//     const completedChallengesCount = challenges.filter((c) => c.completedDays >= c.targetDays).length;

//     const badges = [
//       { id: 'b-1', name: '7-Day Streak Master', desc: 'Maintain a 7+ day low-carbon habit streak', unlocked: streakDays >= 7 },
//       { id: 'b-2', name: '26°C Grid Guardian', desc: 'Adopt Eco AC or Fan-Only cooling', unlocked: acUsage === 'fan_only' || acUsage === 'eco_ac' || committedRecs.electricity },
//       { id: 'b-3', name: 'Plastic-Free Hydrator', desc: 'Use reusable bottle or commit to disposable swap', unlocked: disposableCups === 'reusable_bottle' || committedRecs.disposables },
//       { id: 'b-4', name: 'Sub-25kg Club', desc: 'Bring Net Weekly Receipt under 25 kg CO₂e', unlocked: footprintData.netWeeklyKg <= 25 }
//     ];

//     return { totalXp, rankTitle, nextThreshold, levelProgressPct, multiplier, completedChallengesCount, badges };
//   }, [challenges, committedRecs, streakDays, acUsage, disposableCups, footprintData.netWeeklyKg]);

//   // Dynamic Live Leaderboard
//   const sortedLeaderboard = useMemo(() => {
//     const currentUserEntry = {
//       id: 'u-you',
//       name: 'You (Live Receipt)',
//       group: 'SRM Vadapalani • CS CyberSec',
//       netWeeklyKg: footprintData.netWeeklyKg,
//       streak: streakDays,
//       points: gamificationStats.totalXp,
//       badge: gamificationStats.rankTitle,
//       isCurrentUser: true
//     };
//     return [...BASE_LEADERBOARD_USERS, currentUserEntry].sort((a, b) => a.netWeeklyKg - b.netWeeklyKg);
//   }, [footprintData.netWeeklyKg, streakDays, gamificationStats]);

//   const transportPct = Math.round((footprintData.weeklyTransportKg / Math.max(0.1, footprintData.weeklyTotalKg)) * 100);
//   const electricityPct = Math.round((footprintData.weeklyElectricityKg / Math.max(0.1, footprintData.weeklyTotalKg)) * 100);
//   const disposablesPct = Math.max(0, 100 - transportPct - electricityPct);

//   const toggleCommitRec = (id, title) => {
//     setCommittedRecs((prev) => {
//       const nextState = !prev[id];
//       if (nextState) {
//         showToast(`Applied habit swap: "${title}" — Leaderboard rank & XP updated!`);
//       }
//       return { ...prev, [id]: nextState };
//     });
//   };

//   const handleAdvanceChallenge = (chId) => {
//     setChallenges((prev) =>
//       prev.map((c) => {
//         if (c.id !== chId) return c;
//         const nextDays = c.completedDays < c.targetDays ? c.completedDays + 1 : 0;
//         if (nextDays === c.targetDays) {
//           setStreakDays((s) => s + 1);
//           showToast(`Challenge Completed! ${c.reward} unlocked!`);
//         }
//         return { ...c, completedDays: nextDays };
//       })
//     );
//   };

//   const toggleDayCheckin = (idx) => {
//     setWeekCheckins((prev) => {
//       const updated = [...prev];
//       updated[idx] = !updated[idx];
//       const activeCount = updated.filter(Boolean).length;
//       setStreakDays(activeCount);
//       if (updated[idx]) {
//         showToast(`Day ${idx + 1} habit check-in verified! +35 XP`);
//       }
//       return updated;
//     });
//   };

//   const currentQuote = MOTIVATIONAL_QUOTES[quoteIdx];

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16 selection:bg-emerald-500 selection:text-slate-950">
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up bg-emerald-500 text-slate-950 px-5 py-3.5 rounded-2xl shadow-2xl shadow-emerald-500/30 border border-emerald-300 flex items-center gap-3 font-bold text-sm">
//           <Sparkles size={22} strokeWidth={2.4} className="shrink-0" />
//           <span>{toastMessage}</span>
//         </div>
//       )}

//       {/* Top Sticky Navbar */}
//       <header className="border-b border-slate-800/80 bg-slate-900/85 backdrop-blur-xl sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-3.5">
//             <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
//               <Receipt size={25} strokeWidth={2.3} className="text-slate-950 shrink-0" />
//             </div>
//             <div>
//               <div className="flex items-center gap-2">
//                 <span className="font-extrabold text-lg tracking-tight text-white">EcoReceipt</span>
//                 <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
//                   {gamificationStats.rankTitle} • {gamificationStats.totalXp} XP
//                 </span>
//               </div>
//               <p className="text-[11px] text-slate-400">
//                 Itemized Carbon Receipt • Behavioral Gamification • Live Campus Leaderboard
//               </p>
//             </div>
//           </div>

//           <nav className="flex items-center gap-1 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto">
//             {[
//               { id: 'dashboard', label: '1. Receipt', icon: Receipt },
//               { id: 'questionnaire', label: '2. Questionnaire', icon: Sliders },
//               { id: 'challenges', label: '3. Streaks & XP', icon: Flame },
//               { id: 'leaderboard', label: '4. Leaderboard', icon: Trophy },
//               { id: 'insights', label: '5. Stats & Quotes', icon: BookOpen },
//               { id: 'factors', label: '6. Factors', icon: Table }
//             ].map((tab) => {
//               const IconComp = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
//                     activeTab === tab.id
//                       ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 font-bold'
//                       : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
//                   }`}
//                 >
//                   <IconComp size={16} strokeWidth={2.2} className="shrink-0" />
//                   <span>{tab.label}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>
//       </header>

//       {/* Top Strip: Motivational Quote Banner + Quick Demo Profiles + 4 KPI Cards */}
//       <section className="border-b border-slate-800/80 bg-gradient-to-b from-emerald-950/25 via-slate-900/60 to-slate-950">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-4">
//           <div className="bg-slate-900/90 border border-emerald-500/25 rounded-2xl p-3.5 px-4 flex flex-wrap items-center justify-between gap-4">
//             <div className="flex items-start gap-3 max-w-4xl">
//               <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
//                 <Quote size={18} className="text-emerald-400" />
//               </div>
//               <div>
//                 <p className="text-xs sm:text-sm font-semibold text-slate-100 italic">
//                   "{currentQuote.quote}" — <span className="text-emerald-400 not-italic font-bold">{currentQuote.author}</span>
//                 </p>
//                 <p className="text-[11px] text-slate-400 mt-0.5">
//                   <span className="text-amber-400 font-bold">Statistical Fact:</span> {currentQuote.statHighlight}
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => setQuoteIdx((i) => (i + 1) % MOTIVATIONAL_QUOTES.length)}
//               className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-300 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shrink-0"
//             >
//               <RefreshCw size={13} />
//               <span>Next Quote</span>
//             </button>
//           </div>

//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="space-y-1">
//               <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
//                 <ShieldCheck size={15} strokeWidth={2.2} />
//                 <span>Real-Time Carbon Telemetry • Grounded in CEA India & DEFRA Conversion Factors</span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
//                 Turn Everyday Choices Into an Itemized{' '}
//                 <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Environmental Receipt</span>
//               </h1>
//             </div>

//             <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-2 rounded-2xl border border-slate-800">
//               <span className="text-xs font-semibold text-slate-400 px-2">Quick Demo Profiles:</span>
//               {DEMO_PRESETS.map((preset) => (
//                 <button
//                   key={preset.id}
//                   onClick={() => applyPreset(preset)}
//                   className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-emerald-500/20 text-xs font-semibold text-slate-200 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 transition cursor-pointer"
//                 >
//                   {preset.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* 4 Live Summary KPI Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
//                 <Receipt size={26} strokeWidth={2.2} className="text-emerald-400" />
//               </div>
//               <div>
//                 <span className="text-xs text-slate-400 font-medium">Net Weekly Footprint</span>
//                 <div className="text-2xl font-black text-white">{footprintData.netWeeklyKg} <span className="text-sm font-semibold text-slate-400">kg CO₂e</span></div>
//                 <span className="text-[11px] text-emerald-400 font-semibold">{footprintData.netWeeklyKg <= 35 ? 'Below Sustainable Target (35 kg/wk)' : 'Above 35 kg/wk Target — See 3 Tips'}</span>
//               </div>
//             </div>

//             <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0">
//                 <TrendingDown size={26} strokeWidth={2.2} className="text-teal-400" />
//               </div>
//               <div>
//                 <span className="text-xs text-slate-400 font-medium">Active Habit Savings</span>
//                 <div className="text-2xl font-black text-emerald-400">-{footprintData.activeWeeklySavingsKg} <span className="text-sm font-semibold text-slate-400">kg / wk</span></div>
//                 <span className="text-[11px] text-slate-400">Live Leaderboard Rank: #{sortedLeaderboard.findIndex((u) => u.isCurrentUser) + 1}</span>
//               </div>
//             </div>

//             <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
//                 <Flame size={26} strokeWidth={2.2} className="text-amber-400" />
//               </div>
//               <div>
//                 <span className="text-xs text-slate-400 font-medium">Habit Streak & Multiplier</span>
//                 <div className="text-2xl font-black text-white">{streakDays} Days <span className="text-xs font-bold text-amber-400">({gamificationStats.multiplier}x XP)</span></div>
//                 <span className="text-[11px] text-amber-400 font-semibold">{gamificationStats.totalXp} XP • {gamificationStats.rankTitle}</span>
//               </div>
//             </div>

//             <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
//               <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
//                 <Trees size={26} strokeWidth={2.2} className="text-sky-400" />
//               </div>
//               <div>
//                 <span className="text-xs text-slate-400 font-medium">Annual Impact Equivalent</span>
//                 <div className="text-2xl font-black text-white">{footprintData.annualProjectedKg} <span className="text-sm font-semibold text-slate-400">kg / yr</span></div>
//                 <span className="text-[11px] text-sky-400 font-semibold">Swaps equal ~{footprintData.treesEquivalent} trees planted/yr</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
//         {/* =============================================================== */}
//         {/* TAB 1: LIVE RECEIPT & DASHBOARD                                 */}
//         {/* =============================================================== */}
//         {activeTab === 'dashboard' && (
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in-up items-start">
//             <div className="lg:col-span-5 space-y-4">
//               <div className="bg-amber-50 text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-emerald-500/30 font-mono relative overflow-hidden">
//                 <div className="flex justify-between items-center border-b-2 border-dashed border-slate-300 pb-4 mb-4">
//                   <div>
//                     <div className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
//                       <Receipt size={22} strokeWidth={2.5} className="text-emerald-700" />
//                       <span>ECORECEIPT MART</span>
//                     </div>
//                     <p className="text-[11px] text-slate-600">ENVIRONMENTAL IMPACT STATEMENT (ESTIMATE)</p>
//                   </div>
//                   <div className="text-right text-[11px] text-slate-600">
//                     <div>BILL #ER-2026-05</div>
//                     <div>CYCLE: 7-DAY WEEKLY</div>
//                   </div>
//                 </div>

//                 <div className="mb-4 flex items-center justify-between bg-emerald-950/10 px-3 py-2 rounded-xl border border-emerald-800/20 font-sans">
//                   <span className="text-xs font-semibold text-slate-700">Want to change your daily habits?</span>
//                   <button onClick={() => setActiveTab('questionnaire')} className="text-xs font-bold text-emerald-800 hover:text-emerald-600 flex items-center gap-1 cursor-pointer">
//                     <span>Edit Habits</span>
//                     <ArrowRight size={14} strokeWidth={2.5} />
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-12 text-[11px] font-bold text-slate-500 border-b border-slate-300 pb-1.5 mb-3">
//                   <div className="col-span-6">ITEM / HABIT</div>
//                   <div className="col-span-3 text-right">DAILY</div>
//                   <div className="col-span-3 text-right">WEEKLY</div>
//                 </div>

//                 <div className="space-y-3 text-xs border-b-2 border-dashed border-slate-300 pb-4 mb-4">
//                   <div>
//                     <div className="grid grid-cols-12 font-bold text-slate-900">
//                       <div className="col-span-6">01. DAILY COMMUTE</div>
//                       <div className="col-span-3 text-right">{footprintData.dailyTransportKg} kg</div>
//                       <div className="col-span-3 text-right">{footprintData.weeklyTransportKg} kg</div>
//                     </div>
//                     <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.tMode.label}</div>
//                   </div>
//                   <div>
//                     <div className="grid grid-cols-12 font-bold text-slate-900">
//                       <div className="col-span-6">02. COOLING & AC</div>
//                       <div className="col-span-3 text-right">{footprintData.dailyAcKg} kg</div>
//                       <div className="col-span-3 text-right">{footprintData.weeklyAcKg} kg</div>
//                     </div>
//                     <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.acOpt.label}</div>
//                   </div>
//                   <div>
//                     <div className="grid grid-cols-12 font-bold text-slate-900">
//                       <div className="col-span-6">03. PLUG & TECH LOADS</div>
//                       <div className="col-span-3 text-right">{footprintData.dailyApplianceKg} kg</div>
//                       <div className="col-span-3 text-right">{footprintData.weeklyApplianceKg} kg</div>
//                     </div>
//                     <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.appOpt.label}</div>
//                   </div>
//                   <div>
//                     <div className="grid grid-cols-12 font-bold text-slate-900">
//                       <div className="col-span-6">04. DISPOSABLE CUPS</div>
//                       <div className="col-span-3 text-right">{footprintData.dailyCupsKg} kg</div>
//                       <div className="col-span-3 text-right">{footprintData.weeklyCupsKg} kg</div>
//                     </div>
//                     <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.cupOpt.itemCountLabel}</div>
//                   </div>
//                   <div>
//                     <div className="grid grid-cols-12 font-bold text-slate-900">
//                       <div className="col-span-6">05. FOOD PACKAGING</div>
//                       <div className="col-span-3 text-right">{footprintData.dailyFoodPkgKg} kg</div>
//                       <div className="col-span-3 text-right">{footprintData.weeklyFoodPkgKg} kg</div>
//                     </div>
//                     <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.foodOpt.itemCountLabel}</div>
//                   </div>
//                 </div>

//                 <div className="space-y-1.5 text-xs border-b-2 border-dashed border-slate-300 pb-4 mb-4">
//                   <div className="flex justify-between text-slate-700">
//                     <span>GROSS WEEKLY FOOTPRINT:</span>
//                     <span className="font-bold">{footprintData.weeklyTotalKg} kg CO₂e</span>
//                   </div>
//                   <div className="flex justify-between text-emerald-700 font-bold">
//                     <span>GREEN HABIT SWAP DISCOUNT:</span>
//                     <span>-{footprintData.activeWeeklySavingsKg} kg CO₂e</span>
//                   </div>
//                   <div className="flex justify-between text-base font-black text-slate-950 pt-1">
//                     <span>NET WEEKLY TOTAL:</span>
//                     <span>{footprintData.netWeeklyKg} kg CO₂e</span>
//                   </div>
//                 </div>

//                 <div className="mb-4 font-sans">
//                   <button
//                     onClick={handleSaveReceiptSnapshot}
//                     className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
//                   >
//                     <CheckCircle2 size={16} strokeWidth={2.3} />
//                     <span>Log Weekly Receipt Snapshot</span>
//                   </button>
//                 </div>

//                 <div className="text-center space-y-2">
//                   <p className="text-[11px] text-slate-600 font-sans">*All figures are estimates based on published conversion factors.</p>
//                   <div className="h-9 w-full flex items-center justify-center gap-0.5 pt-1 opacity-80">
//                     {[2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2].map((w, idx) => (
//                       <div key={idx} className="h-full bg-slate-900" style={{ width: `${w * 2}px` }} />
//                     ))}
//                   </div>
//                   <div className="text-[10px] tracking-widest text-slate-500">THANK YOU FOR CHOOSING LOW-CARBON HABITS</div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-7 space-y-6">
//               <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
//                     <BarChart3 size={24} strokeWidth={2.2} className="text-emerald-400" />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-extrabold text-white">Weekly Footprint Breakdown & 7-Day Trend Chart</h2>
//                     <p className="text-xs text-slate-400">Visualizing how transport, electricity, and disposables accumulate over a week</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2.5">
//                   <div className="flex justify-between text-xs font-semibold">
//                     <span className="text-sky-400">Transport: {footprintData.weeklyTransportKg} kg ({transportPct}%)</span>
//                     <span className="text-amber-400">Electricity: {footprintData.weeklyElectricityKg} kg ({electricityPct}%)</span>
//                     <span className="text-rose-400">Disposables: {footprintData.weeklyDisposablesKg} kg ({disposablesPct}%)</span>
//                   </div>

//                   <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800">
//                     <div className="bg-sky-500 h-full transition-all duration-500" style={{ width: `${transportPct}%` }} />
//                     <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: `${electricityPct}%` }} />
//                     <div className="bg-rose-500 h-full transition-all duration-500" style={{ width: `${disposablesPct}%` }} />
//                   </div>
//                 </div>

//                 <div className="pt-2">
//                   <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
//                     <span className="font-semibold text-slate-300">Daily Emissions (Mon – Sun) in kg CO₂e</span>
//                     <span className="text-emerald-400 font-semibold">Dashed Line = 5.0 kg/day Sustainable Target</span>
//                   </div>

//                   <div className="h-44 bg-slate-950/90 border border-slate-800/90 rounded-2xl p-4 flex items-end justify-between gap-3 relative">
//                     <div className="absolute left-4 right-4 border-t-2 border-dashed border-emerald-500/40 pointer-events-none flex justify-end" style={{ bottom: '45%' }}>
//                       <span className="text-[10px] text-emerald-400 bg-slate-950 px-1.5 -mt-2.5">5.0 kg target</span>
//                     </div>

//                     {footprintData.weeklyTrend.map((d) => {
//                       const heightPct = Math.min(100, Math.max(12, Math.round((d.kg / 14) * 100)));
//                       const isLow = d.kg <= 5.0;
//                       return (
//                         <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end z-10">
//                           <span className="text-[11px] font-bold text-slate-300">{d.kg}</span>
//                           <div className="w-full max-w-[42px] bg-slate-900 rounded-t-xl overflow-hidden flex items-end h-28">
//                             <div
//                               className={`w-full rounded-t-xl transition-all duration-500 ${isLow ? 'bg-gradient-to-t from-emerald-600 to-teal-400' : 'bg-gradient-to-t from-amber-600 to-amber-400'}`}
//                               style={{ height: `${heightPct}%` }}
//                             />
//                           </div>
//                           <span className="text-xs font-semibold text-slate-400">{d.day}</span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0">
//                     <HeartHandshake size={24} strokeWidth={2.2} className="text-teal-400" />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-extrabold text-white">3 Positive Improvement Recommendations</h2>
//                     <p className="text-xs text-slate-400">Check any box below to preview how small, achievable swaps lower your weekly receipt & boost your Leaderboard rank</p>
//                   </div>
//                 </div>

//                 <div className="space-y-3.5">
//                   {footprintData.recommendations.map((rec, index) => {
//                     const isCommitted = !!committedRecs[rec.id];
//                     return (
//                       <div
//                         key={rec.id}
//                         onClick={() => toggleCommitRec(rec.id, rec.title)}
//                         className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 ${
//                           isCommitted ? 'bg-emerald-950/25 border-emerald-500/50 shadow-lg' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
//                         }`}
//                       >
//                         <div className="flex items-start gap-3.5">
//                           <button className="mt-0.5 text-emerald-400 shrink-0 cursor-pointer">
//                             {isCommitted ? <CheckSquare size={22} strokeWidth={2.3} className="text-emerald-400" /> : <Square size={22} strokeWidth={2.2} className="text-slate-500" />}
//                           </button>
//                           <div className="space-y-1">
//                             <div className="flex items-center gap-2 flex-wrap">
//                               <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Tip {index + 1} • {rec.category}</span>
//                               <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-medium">{rec.impactBadge}</span>
//                             </div>
//                             <h3 className="text-sm font-bold text-white">{rec.title}</h3>
//                             <p className="text-xs text-slate-400 leading-relaxed">{rec.positiveTip}</p>
//                           </div>
//                         </div>

//                         <div className="text-right shrink-0">
//                           <span className="inline-block text-xs font-extrabold px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
//                             Save {rec.weeklySavingsKg} kg/wk
//                           </span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* =============================================================== */}
//         {/* TAB 2: QUESTIONNAIRE                                            */}
//         {/* =============================================================== */}
//         {activeTab === 'questionnaire' && (
//           <div className="space-y-6 animate-fade-in-up">
//             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center gap-3.5">
//                 <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
//                   <Sliders size={26} strokeWidth={2.2} className="text-emerald-400" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-extrabold text-white">Daily Habit Questionnaire (Multiple-Choice)</h2>
//                   <p className="text-xs text-slate-400 mt-0.5">Select your typical daily transport, electricity, and disposable habits.</p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setActiveTab('dashboard')}
//                 className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
//               >
//                 <Receipt size={18} strokeWidth={2.3} />
//                 <span>View Updated Receipt ({footprintData.netWeeklyKg} kg/wk)</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
//                     <Car size={24} strokeWidth={2.2} className="text-sky-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-bold text-white">1. Daily Transport</h3>
//                     <p className="text-xs text-slate-400">Current: {footprintData.weeklyTransportKg} kg CO₂e / week</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-slate-300 block">Primary Commute Mode:</label>
//                   <div className="space-y-2">
//                     {TRANSPORT_MODES.map((m) => (
//                       <button
//                         key={m.id}
//                         onClick={() => setTransportMode(m.id)}
//                         className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
//                           transportMode === m.id ? 'bg-sky-500/20 border-sky-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-bold">{m.label}</span>
//                           <span className="text-[11px] text-sky-300 font-mono">{m.unitLabel}</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-2 pt-2 border-t border-slate-800">
//                   <label className="text-xs font-bold text-slate-300 block">Daily Round-Trip Distance:</label>
//                   <div className="grid grid-cols-2 gap-2">
//                     {DISTANCE_BRACKETS.map((d) => (
//                       <button
//                         key={d.id}
//                         onClick={() => setDistanceBracket(d.id)}
//                         className={`p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
//                           distanceBracket === d.id ? 'bg-sky-500 text-slate-950 border-sky-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
//                         }`}
//                       >
//                         {d.label}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
//                     <Zap size={24} strokeWidth={2.2} className="text-amber-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-bold text-white">2. Electricity & Cooling</h3>
//                     <p className="text-xs text-slate-400">Current: {footprintData.weeklyElectricityKg} kg CO₂e / week</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-slate-300 block">Room Cooling & Air Conditioning:</label>
//                   <div className="space-y-2">
//                     {AC_USAGE_OPTIONS.map((a) => (
//                       <button
//                         key={a.id}
//                         onClick={() => setAcUsage(a.id)}
//                         className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
//                           acUsage === a.id ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-bold">{a.label}</span>
//                           <span className="text-[11px] text-amber-300 font-mono">~{a.kwhPerDay} kWh/d</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-2 pt-2 border-t border-slate-800">
//                   <label className="text-xs font-bold text-slate-300 block">Appliances & Device Power Habits:</label>
//                   <div className="space-y-2">
//                     {APPLIANCE_OPTIONS.map((ap) => (
//                       <button
//                         key={ap.id}
//                         onClick={() => setApplianceUsage(ap.id)}
//                         className={`w-full text-left p-2.5 rounded-xl border text-xs transition cursor-pointer ${
//                           applianceUsage === ap.id ? 'bg-amber-500/20 border-amber-400 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
//                         }`}
//                       >
//                         <div className="flex justify-between">
//                           <span>{ap.label}</span>
//                           <span className="text-amber-300 font-mono">{ap.kwhPerDay} kWh/d</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0">
//                     <Coffee size={24} strokeWidth={2.2} className="text-rose-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-bold text-white">3. Disposables & Packaging</h3>
//                     <p className="text-xs text-slate-400">Current: {footprintData.weeklyDisposablesKg} kg CO₂e / week</p>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-slate-300 block">Single-Use Cups & Beverage Bottles:</label>
//                   <div className="space-y-2">
//                     {DISPOSABLE_CUPS_OPTIONS.map((c) => (
//                       <button
//                         key={c.id}
//                         onClick={() => setDisposableCups(c.id)}
//                         className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
//                           disposableCups === c.id ? 'bg-rose-500/20 border-rose-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-bold">{c.label}</span>
//                           <span className="text-[11px] text-rose-300 font-mono">{c.kgCo2PerDay} kg/d</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-2 pt-2 border-t border-slate-800">
//                   <label className="text-xs font-bold text-slate-300 block">Food Delivery & Takeaway Containers:</label>
//                   <div className="space-y-2">
//                     {FOOD_PACKAGING_OPTIONS.map((f) => (
//                       <button
//                         key={f.id}
//                         onClick={() => setFoodPackaging(f.id)}
//                         className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
//                           foodPackaging === f.id ? 'bg-rose-500/20 border-rose-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="text-xs font-bold">{f.label}</span>
//                           <span className="text-[11px] text-rose-300 font-mono">{f.kgCo2PerDay} kg/d</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* =============================================================== */}
//         {/* TAB 3: GAMIFIED STREAKS, XP LEVELING, 7-DAY MATRIX & BADGES     */}
//         {/* =============================================================== */}
//         {activeTab === 'challenges' && (
//           <div className="space-y-6 animate-fade-in-up">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//               <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
//                 <div className="flex flex-wrap items-center justify-between gap-4">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
//                       <Flame size={28} strokeWidth={2.2} className="text-amber-400" />
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <h2 className="text-xl font-extrabold text-white">{gamificationStats.rankTitle}</h2>
//                         <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
//                           {gamificationStats.multiplier}x Streak Multiplier
//                         </span>
//                       </div>
//                       <p className="text-xs text-slate-400 mt-0.5">
//                         {gamificationStats.totalXp} / {gamificationStats.nextThreshold} XP to next sustainability tier
//                       </p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => {
//                       if (streakFreezeAvailable) {
//                         setStreakFreezeAvailable(false);
//                         showToast('Streak Freeze Shield Armed! Your streak is protected for 24 hrs.');
//                       } else {
//                         showToast('Streak Shield is already active for this week!');
//                       }
//                     }}
//                     className={`px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition ${
//                       streakFreezeAvailable
//                         ? 'bg-sky-500/15 border-sky-500/40 text-sky-300 hover:bg-sky-500/25'
//                         : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
//                     }`}
//                   >
//                     <ShieldCheck size={16} />
//                     <span>{streakFreezeAvailable ? 'Activate Streak Freeze (1 Left)' : 'Streak Shield Active ✓'}</span>
//                   </button>
//                 </div>

//                 <div className="space-y-1.5">
//                   <div className="flex justify-between text-xs font-bold">
//                     <span className="text-emerald-400">XP Progression</span>
//                     <span className="text-slate-300">{gamificationStats.levelProgressPct}%</span>
//                   </div>
//                   <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
//                     <div
//                       className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 transition-all duration-500"
//                       style={{ width: `${gamificationStats.levelProgressPct}%` }}
//                     />
//                   </div>
//                 </div>

//                 <div className="pt-2 border-t border-slate-800 space-y-3">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs font-bold text-slate-300">
//                       7-Day Habit Check-In Matrix (Click any day to verify low-carbon log):
//                     </span>
//                     <span className="text-xs font-extrabold text-amber-400">
//                       Active Streak: {streakDays} Days 🔥
//                     </span>
//                   </div>
//                   <div className="grid grid-cols-7 gap-2">
//                     {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((dayLabel, idx) => {
//                       const checked = weekCheckins[idx];
//                       return (
//                         <button
//                           key={dayLabel}
//                           onClick={() => toggleDayCheckin(idx)}
//                           className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center gap-1.5 ${
//                             checked
//                               ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/10'
//                               : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
//                           }`}
//                         >
//                           <span className="text-[11px] font-bold">{dayLabel}</span>
//                           <CheckCircle2 size={18} className={checked ? 'text-emerald-400' : 'text-slate-700'} />
//                           <span className="text-[10px] font-semibold">{checked ? '+35 XP' : 'Log'}</span>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2.5">
//                     <Award size={22} className="text-emerald-400" />
//                     <h3 className="text-base font-extrabold text-white">Unlockable Milestone Badges</h3>
//                   </div>
//                   <span className="text-xs font-bold text-emerald-400">
//                     {gamificationStats.badges.filter((b) => b.unlocked).length} / {gamificationStats.badges.length} Unlocked
//                   </span>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {gamificationStats.badges.map((b) => (
//                     <div
//                       key={b.id}
//                       className={`p-3.5 rounded-2xl border flex flex-col justify-between gap-2 ${
//                         b.unlocked
//                           ? 'bg-emerald-950/30 border-emerald-500/40 text-white'
//                           : 'bg-slate-950/60 border-slate-800/80 text-slate-500 opacity-75'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs font-extrabold">{b.name}</span>
//                         {b.unlocked ? <Unlock size={15} className="text-emerald-400" /> : <Lock size={15} className="text-slate-600" />}
//                       </div>
//                       <p className="text-[11px] text-slate-400 leading-snug">{b.desc}</p>
//                       <span className={`text-[10px] font-bold uppercase ${b.unlocked ? 'text-emerald-400' : 'text-slate-600'}`}>
//                         {b.unlocked ? 'Unlocked ✓' : 'Locked — Adjust Habits'}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center justify-between gap-3">
//               <h3 className="text-lg font-extrabold text-white">Active Weekly Quests ({challenges.length})</h3>
//               <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
//                 {['All', 'Energy', 'Transit', 'Waste'].map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setChallengeCategory(cat)}
//                     className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
//                       challengeCategory === cat ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {challenges
//                 .filter((c) => challengeCategory === 'All' || c.category === challengeCategory)
//                 .map((ch) => {
//                   const pct = Math.round((ch.completedDays / ch.targetDays) * 100);
//                   const isDone = ch.completedDays >= ch.targetDays;
//                   return (
//                     <div
//                       key={ch.id}
//                       className={`rounded-3xl border p-6 flex flex-col justify-between gap-5 transition-all ${
//                         isDone ? 'bg-emerald-950/25 border-emerald-500/40 shadow-lg' : 'bg-slate-900 border-slate-800'
//                       }`}
//                     >
//                       <div className="space-y-3">
//                         <div className="flex items-center justify-between gap-2">
//                           <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-emerald-300">
//                             {ch.reward}
//                           </span>
//                           <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
//                             {ch.category || 'Eco'} • {ch.completedDays}/{ch.targetDays}d
//                           </span>
//                         </div>
//                         <h3 className="text-base font-extrabold text-white">{ch.title}</h3>
//                         <p className="text-xs text-slate-400 leading-relaxed">{ch.desc}</p>
//                       </div>

//                       <div className="space-y-3">
//                         <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
//                           <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500" style={{ width: `${pct}%` }} />
//                         </div>

//                         <button
//                           onClick={() => handleAdvanceChallenge(ch.id)}
//                           className={`w-full py-2.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
//                             isDone ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-white'
//                           }`}
//                         >
//                           {isDone ? 'Completed ✓ (Click to Replay)' : "+ Log Today's Progress"}
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         )}

//         {/* =============================================================== */}
//         {/* TAB 4: LIVE CAMPUS & COMMUNITY LEADERBOARD                      */}
//         {/* =============================================================== */}
//         {activeTab === 'leaderboard' && (
//           <div className="space-y-6 animate-fade-in-up">
//             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center gap-3.5">
//                 <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
//                   <Trophy size={26} strokeWidth={2.2} className="text-amber-400" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-extrabold text-white">Live Low-Carbon Community Leaderboard</h2>
//                   <p className="text-xs text-slate-400 mt-0.5">
//                     Ranked by lowest Net Weekly Carbon Receipt (kg CO₂e / week) and active habit streaks. Adjust your receipt to climb live!
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
//                 <button
//                   onClick={() => setLeaderboardMode('individuals')}
//                   className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
//                     leaderboardMode === 'individuals' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
//                   }`}
//                 >
//                   Individual Champions
//                 </button>
//                 <button
//                   onClick={() => setLeaderboardMode('campuses')}
//                   className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
//                     leaderboardMode === 'campuses' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
//                   }`}
//                 >
//                   Hostels & Departments
//                 </button>
//               </div>
//             </div>

//             {leaderboardMode === 'individuals' ? (
//               <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-left border-collapse text-xs">
//                     <thead>
//                       <tr className="border-b border-slate-800 text-slate-400 uppercase bg-slate-950/60">
//                         <th className="py-3.5 px-5">Rank</th>
//                         <th className="py-3.5 px-5">Participant</th>
//                         <th className="py-3.5 px-5">Cohort / Hostel</th>
//                         <th className="py-3.5 px-5">Sustainability Tier</th>
//                         <th className="py-3.5 px-5">Streak</th>
//                         <th className="py-3.5 px-5">XP Score</th>
//                         <th className="py-3.5 px-5 text-right">Net Weekly Receipt</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-800/70">
//                       {sortedLeaderboard.map((u, idx) => {
//                         const rank = idx + 1;
//                         return (
//                           <tr
//                             key={u.id}
//                             className={`transition ${
//                               u.isCurrentUser ? 'bg-emerald-500/15 border-l-4 border-l-emerald-400 font-bold text-white' : 'text-slate-200 hover:bg-slate-950/50'
//                             }`}
//                           >
//                             <td className="py-4 px-5 font-black text-sm">
//                               {rank === 1 ? '🥇 #1' : rank === 2 ? '🥈 #2' : rank === 3 ? '🥉 #3' : `#${rank}`}
//                             </td>
//                             <td className="py-4 px-5">
//                               <div className="flex items-center gap-2">
//                                 <span>{u.name}</span>
//                                 {u.isCurrentUser && (
//                                   <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black">
//                                     LIVE YOU
//                                   </span>
//                                 )}
//                               </div>
//                             </td>
//                             <td className="py-4 px-5 text-slate-400">{u.group}</td>
//                             <td className="py-4 px-5">
//                               <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-emerald-300 text-[11px] font-semibold">
//                                 {u.badge}
//                               </span>
//                             </td>
//                             <td className="py-4 px-5 text-amber-400 font-bold">{u.streak}d 🔥</td>
//                             <td className="py-4 px-5 font-mono text-slate-300">{u.points} XP</td>
//                             <td className="py-4 px-5 text-right font-mono font-black text-emerald-400 text-sm">
//                               {u.netWeeklyKg} kg CO₂e
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {CAMPUS_HOSTEL_LEADERBOARD.map((h, idx) => (
//                   <div key={h.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
//                         Rank #{idx + 1} Cohort
//                       </span>
//                       <span className="text-xs font-bold text-emerald-400">{h.trend}</span>
//                     </div>
//                     <h3 className="text-lg font-extrabold text-white">{h.name}</h3>
//                     <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800 text-center">
//                       <div className="bg-slate-950 p-3 rounded-2xl">
//                         <span className="text-[11px] text-slate-400 block">Active Members</span>
//                         <span className="text-base font-black text-white">{h.participants}</span>
//                       </div>
//                       <div className="bg-slate-950 p-3 rounded-2xl">
//                         <span className="text-[11px] text-slate-400 block">Avg Receipt</span>
//                         <span className="text-base font-black text-emerald-400">{h.avgWeeklyKg} kg</span>
//                       </div>
//                       <div className="bg-slate-950 p-3 rounded-2xl">
//                         <span className="text-[11px] text-slate-400 block">CO₂e Saved</span>
//                         <span className="text-base font-black text-sky-400">{h.totalSavedKg} kg</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* =============================================================== */}
//         {/* TAB 5: STATISTICAL FIGURES & MOTIVATIONAL INSIGHTS HUB          */}
//         {/* =============================================================== */}
//         {activeTab === 'insights' && (
//           <div className="space-y-6 animate-fade-in-up">
//             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
//               <div className="flex items-center gap-3.5">
//                 <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
//                   <BookOpen size={26} strokeWidth={2.2} className="text-emerald-400" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-extrabold text-white">Climate Statistical Figures & Behavioral Science Hub</h2>
//                   <p className="text-xs text-slate-400">
//                     Empirical benchmarks from CEA India, BEE, and lifecycle studies showing why micro-habits compound at scale.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {STATISTICAL_FIGURES.map((st) => (
//                 <div key={st.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 flex flex-col justify-between">
//                   <div className="space-y-2.5">
//                     <div className="flex items-center justify-between gap-2">
//                       <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">{st.category}</span>
//                       <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
//                         {st.metric}
//                       </span>
//                     </div>
//                     <h3 className="text-base font-extrabold text-white">{st.headline}</h3>
//                     <p className="text-xs text-slate-300 leading-relaxed">{st.explanation}</p>
//                   </div>

//                   <div className="space-y-2 pt-3 border-t border-slate-800">
//                     <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
//                       <span>{st.comparisonLabel}</span>
//                       <span className="text-emerald-400">{st.barPct}% Reduction Potential</span>
//                     </div>
//                     <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
//                       <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400" style={{ width: `${st.barPct}%` }} />
//                     </div>
//                     <p className="text-[10px] text-slate-500">Source: {st.source}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
//               <h3 className="text-base font-extrabold text-white flex items-center gap-2">
//                 <Quote size={18} className="text-emerald-400" />
//                 <span>Curated Voices on Collective Action</span>
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {MOTIVATIONAL_QUOTES.map((q, idx) => (
//                   <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
//                     <p className="text-xs text-slate-200 italic leading-relaxed">"{q.quote}"</p>
//                     <div className="text-[11px] font-bold text-emerald-400">
//                       — {q.author} <span className="text-slate-500 font-normal">({q.role})</span>
//                     </div>
//                     <div className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
//                       📊 {q.statHighlight}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* =============================================================== */}
//         {/* TAB 6: CONVERSION FACTORS TABLE                                 */}
//         {/* =============================================================== */}
//         {activeTab === 'factors' && (
//           <div className="space-y-6 animate-fade-in-up">
//             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
//               <div className="flex items-center gap-3.5">
//                 <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
//                   <Table size={26} strokeWidth={2.2} className="text-emerald-400" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-extrabold text-white">Predefined Emission Conversion Factors Lookup Table</h2>
//                   <p className="text-xs text-slate-400 mt-0.5">Transparent arithmetic lookup table used to calculate your Environmental Receipt.</p>
//                 </div>
//               </div>

//               <div className="overflow-x-auto pt-2">
//                 <table className="w-full text-left border-collapse text-xs">
//                   <thead>
//                     <tr className="border-b border-slate-800 text-slate-400 uppercase">
//                       <th className="py-3 px-4">Habit Category</th>
//                       <th className="py-3 px-4">Activity / Item</th>
//                       <th className="py-3 px-4">Conversion Factor</th>
//                       <th className="py-3 px-4">Formula Used in Receipt</th>
//                       <th className="py-3 px-4">Reference Basis</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-800/70 text-slate-200">
//                     <tr>
//                       <td className="py-3 px-4 font-bold text-sky-400">Transport</td>
//                       <td className="py-3 px-4">Metro / Bus / Suburban Rail</td>
//                       <td className="py-3 px-4 font-mono">0.035 kg CO₂e / km</td>
//                       <td className="py-3 px-4 font-mono">Daily km × 0.035 × 7 days</td>
//                       <td className="py-3 px-4 text-slate-400">India GHG Program / DEFRA</td>
//                     </tr>
//                     <tr>
//                       <td className="py-3 px-4 font-bold text-sky-400">Transport</td>
//                       <td className="py-3 px-4">Petrol Two-Wheeler (110–150cc)</td>
//                       <td className="py-3 px-4 font-mono">0.068 kg CO₂e / km</td>
//                       <td className="py-3 px-4 font-mono">Daily km × 0.068 × 7 days</td>
//                       <td className="py-3 px-4 text-slate-400">Two-Wheeler Fuel Lifecycle</td>
//                     </tr>
//                     <tr>
//                       <td className="py-3 px-4 font-bold text-sky-400">Transport</td>
//                       <td className="py-3 px-4">Solo Passenger Car (Petrol/Diesel)</td>
//                       <td className="py-3 px-4 font-mono">0.192 kg CO₂e / km</td>
//                       <td className="py-3 px-4 font-mono">Daily km × 0.192 × 7 days</td>
//                       <td className="py-3 px-4 text-slate-400">IPCC Passenger Vehicle Benchmark</td>
//                     </tr>
//                     <tr>
//                       <td className="py-3 px-4 font-bold text-amber-400">Electricity</td>
//                       <td className="py-3 px-4">Grid Electricity Consumption</td>
//                       <td className="py-3 px-4 font-mono">0.720 kg CO₂e / kWh</td>
//                       <td className="py-3 px-4 font-mono">(AC + Appliance kWh) × 0.72 × 7</td>
//                       <td className="py-3 px-4 text-slate-400">CEA India Grid Baseline</td>
//                     </tr>
//                     <tr>
//                       <td className="py-3 px-4 font-bold text-rose-400">Disposables</td>
//                       <td className="py-3 px-4">Single-Use Cups / PET Bottles</td>
//                       <td className="py-3 px-4 font-mono">0.09 – 0.55 kg CO₂e / day</td>
//                       <td className="py-3 px-4 font-mono">Daily factor × 7 days</td>
//                       <td className="py-3 px-4 text-slate-400">Cradle-to-Grave Resin & Paper LCA</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



import React, { useState, useMemo, useEffect } from 'react';
import {
  Receipt,
  Leaf,
  Zap,
  Car,
  Coffee,
  TrendingDown,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Flame,
  ArrowRight,
  RefreshCw,
  Award,
  Sliders,
  CheckSquare,
  Square,
  Table,
  HeartHandshake,
  Trees,
  ShieldCheck,
  Trophy,
  Quote,
  BookOpen,
  Lock,
  Unlock
} from 'lucide-react';

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

const TRANSPORT_MODES = [
  { id: 'metro_bus', label: 'Metro / Public Bus / Suburban Train', factorPerKm: 0.035, unitLabel: '0.035 kg CO₂e / km', badge: 'Low Carbon', desc: 'Shared mass transit with high passenger efficiency' },
  { id: 'ev_scooter', label: 'Electric Two-Wheeler / EV / Bicycle', factorPerKm: 0.022, unitLabel: '0.022 kg CO₂e / km', badge: 'Ultra Low', desc: 'Zero tailpipe emissions; minimal grid charging footprint' },
  { id: 'petrol_bike', label: 'Petrol Two-Wheeler / Scooter', factorPerKm: 0.068, unitLabel: '0.068 kg CO₂e / km', badge: 'Moderate', desc: 'Standard 110cc–150cc commuter motorcycle or scooter' },
  { id: 'shared_auto', label: 'Shared Auto / Carpool (3+ Riders)', factorPerKm: 0.075, unitLabel: '0.075 kg CO₂e / km', badge: 'Moderate', desc: 'Splits vehicle fuel emissions across multiple passengers' },
  { id: 'solo_car', label: 'Solo Car (Petrol / Diesel Hatchback/SUV)', factorPerKm: 0.192, unitLabel: '0.192 kg CO₂e / km', badge: 'High Impact', desc: 'Single-occupant combustion vehicle in city traffic' }
];

const DISTANCE_BRACKETS = [
  { id: 'short', label: 'Short (< 5 km / day)', kmPerDay: 4 },
  { id: 'medium', label: 'Medium (5 – 15 km / day)', kmPerDay: 10 },
  { id: 'long', label: 'Long (15 – 30 km / day)', kmPerDay: 22 },
  { id: 'extended', label: 'Extended (35+ km / day)', kmPerDay: 38 }
];

const AC_USAGE_OPTIONS = [
  { id: 'fan_only', label: 'Ceiling Fan / Natural Ventilation Only', kwhPerDay: 0.9, desc: 'BLDC / standard ceiling fan (~50–75W for 12–14 hrs)' },
  { id: 'eco_ac', label: 'AC 3 hrs/night at 26°C Eco Mode + Fan', kwhPerDay: 3.2, desc: 'Inverter split AC run briefly before sleep with timer' },
  { id: 'standard_ac', label: 'AC 7 hrs/night at 22°C – 24°C', kwhPerDay: 7.5, desc: 'Full-night bedroom cooling on standard compressor load' },
  { id: 'heavy_ac', label: 'Heavy AC (10+ hrs/day at 18°C – 21°C)', kwhPerDay: 12.4, desc: 'Day + night cooling with high thermal differential' }
];

const APPLIANCE_OPTIONS = [
  { id: 'minimal_tech', label: 'Laptop + Phone (Unplugged When Full)', kwhPerDay: 0.8, desc: 'Smart power strip, LED lighting, zero phantom standby load' },
  { id: 'standard_home', label: 'Laptop + Monitor + Fridge + Water Heater', kwhPerDay: 2.6, desc: 'Typical student apartment / family room appliance usage' },
  { id: 'heavy_rig', label: 'Gaming Desktop + Multi-Monitor + Always-On', kwhPerDay: 5.2, desc: 'High-wattage GPU workstation + 24/7 standby devices' }
];

const DISPOSABLE_CUPS_OPTIONS = [
  { id: 'reusable_bottle', label: 'Reusable Bottle & Mug (0 Disposables)', kgCo2PerDay: 0.02, itemCountLabel: '0 single-use items/day', desc: 'Steel/glass bottle refilled at campus or office stations' },
  { id: 'light_cups', label: '1 – 2 Paper / Plastic Tea or Coffee Cups / day', kgCo2PerDay: 0.18, itemCountLabel: '2 disposable cups/day', desc: 'Poly-coated paper cups or small plastic water bottles' },
  { id: 'heavy_bottles', label: '3+ PET Plastic Bottles / Takeaway Cups / day', kgCo2PerDay: 0.55, itemCountLabel: '4 PET bottles & cups/day', desc: 'Frequent single-use beverage bottles, straws, and lids' }
];

const FOOD_PACKAGING_OPTIONS = [
  { id: 'home_mess', label: 'Home / Hostel Mess Meals (Reusable Plates)', kgCo2PerDay: 0.05, itemCountLabel: '0 takeaway boxes/wk', desc: 'Dine-in or steel tiffin carrier with zero plastic waste' },
  { id: 'occasional_takeaway', label: '2 – 3 Takeaway / Delivery Orders per Week', kgCo2PerDay: 0.28, itemCountLabel: '3 takeaway boxes/wk', desc: 'Cardboard/foil parcels a few times a week' },
  { id: 'daily_delivery', label: 'Daily App Food Delivery (Plastic Tubs + Cutlery)', kgCo2PerDay: 0.78, itemCountLabel: '7+ plastic meal kits/wk', desc: 'Black polypropylene containers, sachets, and carry bags daily' }
];

const GRID_ELECTRICITY_FACTOR = 0.72;

const DEMO_PRESETS = [
  { id: 'commuter', name: 'Urban Solo Commuter', tag: 'High Footprint Demo', transportMode: 'solo_car', distanceBracket: 'long', acUsage: 'standard_ac', applianceUsage: 'standard_home', disposableCups: 'light_cups', foodPackaging: 'daily_delivery' },
  { id: 'student', name: 'Typical Campus Student', tag: 'Balanced Demo', transportMode: 'petrol_bike', distanceBracket: 'medium', acUsage: 'eco_ac', applianceUsage: 'standard_home', disposableCups: 'light_cups', foodPackaging: 'occasional_takeaway' },
  { id: 'eco_champ', name: 'Green Transit Minimalist', tag: 'Low-Carbon Target', transportMode: 'metro_bus', distanceBracket: 'medium', acUsage: 'fan_only', applianceUsage: 'minimal_tech', disposableCups: 'reusable_bottle', foodPackaging: 'home_mess' }
];

const WEEKLY_CHALLENGES = [
  { id: 'ch-1', title: 'Zero-Plastic Hydration Week', reward: '+150 Eco Points', points: 150, category: 'Waste', difficulty: 'Easy', desc: 'Carry a reusable bottle for 5 consecutive campus days instead of buying PET bottles.', targetDays: 5, completedDays: 4 },
  { id: 'ch-2', title: '26°C Smart Cooling Streak', reward: '+200 Eco Points', points: 200, category: 'Energy', difficulty: 'Medium', desc: 'Set your room AC to 26°C with a ceiling fan to cut compressor energy by up to 24%.', targetDays: 7, completedDays: 5 },
  { id: 'ch-3', title: 'Public Transit / Carpool Wednesdays', reward: '+120 Eco Points', points: 120, category: 'Transit', difficulty: 'Easy', desc: 'Swap solo vehicle trips for Metro, bus, or shared auto twice this week.', targetDays: 2, completedDays: 2 },
  { id: 'ch-4', title: 'Phantom Load Vampire Hunt', reward: '+180 Eco Points', points: 180, category: 'Energy', difficulty: 'Medium', desc: 'Unplug laptop bricks, monitor power strips, and chargers before bed for 6 nights.', targetDays: 6, completedDays: 3 },
  { id: 'ch-5', title: 'Zero-Cutlery Delivery Pledge', reward: '+140 Eco Points', points: 140, category: 'Waste', difficulty: 'Easy', desc: 'Opt out of plastic cutlery, straws, and extra tissues on 4 consecutive food orders.', targetDays: 4, completedDays: 3 },
  { id: 'ch-6', title: 'Last-Mile Active Walkathon', reward: '+250 Eco Points', points: 250, category: 'Transit', difficulty: 'Hard', desc: 'Replace all <2 km auto/scooter hops with walking or cycling for a full 7-day cycle.', targetDays: 7, completedDays: 5 }
];

const MOTIVATIONAL_QUOTES = [
  {
    quote: "We don't need a handful of people doing zero waste perfectly. We need millions of people doing it imperfectly.",
    author: "Anne Marie Bonneau",
    role: "Zero-Waste Chef & Environmental Advocate",
    statHighlight: "10,000 students skipping 1 plastic bottle/day diverts 3.65 million bottles from landfills annually."
  },
  {
    quote: "The greatest threat to our planet is the belief that someone else will save it.",
    author: "Robert Swan",
    role: "Polar Explorer & Clean Energy Leader",
    statHighlight: "Shifting AC thermostats from 20°C to 26°C across a single 500-room hostel saves ~185,000 kWh per year."
  },
  {
    quote: "You cannot get through a single day without having an impact on the world around you. What you do makes a difference.",
    author: "Dr. Jane Goodall",
    role: "Ethologist & Conservationist",
    statHighlight: "One commuter switching from a solo car to Metro rail 3 days a week cuts 640 kg of CO₂e every year."
  },
  {
    quote: "Sustainability is no longer about doing less harm. It's about doing more good—one measurable habit at a time.",
    author: "Jochen Zeitz",
    role: "Sustainability Strategist",
    statHighlight: "Phantom standby power accounts for 5% to 10% of residential electricity bills without delivering a single watt of utility."
  }
];

const STATISTICAL_FIGURES = [
  {
    id: 'stat-ac',
    category: 'Cooling & Grid Energy',
    headline: '6% Electricity Saved Per +1°C on AC Thermostat',
    metric: '24%–30% Load Cut',
    source: 'Bureau of Energy Efficiency (BEE India) & CEA Grid Study',
    explanation: 'Running an AC at 26°C with a ceiling fan feels just as cool as 22°C due to convective air movement, while cutting compressor runtime by nearly a third.',
    comparisonLabel: '20°C Heavy AC (8.96 kg CO₂e/day) vs 26°C Eco Mode (2.30 kg CO₂e/day)',
    barPct: 74
  },
  {
    id: 'stat-transit',
    category: 'Urban Commute',
    headline: 'Metro & Bus Emit 81% Less CO₂e Per Passenger-Km Than Solo Cars',
    metric: '0.035 vs 0.192 kg/km',
    source: 'India GHG Program & WRI Urban Mobility Benchmark',
    explanation: 'A single-occupant hatchback in city traffic burns fuel mostly moving 1,200 kg of steel. Mass transit distributes traction energy across hundreds of riders.',
    comparisonLabel: 'Metro Rail (35g/km) vs Two-Wheeler (68g/km) vs Solo Car (192g/km)',
    barPct: 82
  },
  {
    id: 'stat-plastic',
    category: 'Single-Use Disposables',
    headline: '1 Daily Takeaway Meal Kit Generates ~284 kg CO₂e Per Year',
    metric: '365 Polypropylene Sets',
    source: 'Cradle-to-Grave Polymer Packaging Lifecycle Assessment (LCA)',
    explanation: 'Black plastic food containers are made from virgin petroleum resin and are rarely recycled due to carbon-black pigment sorting limitations.',
    comparisonLabel: 'Steel Tiffin / Mess Plate (18 kg/yr) vs Daily Plastic Delivery (284 kg/yr)',
    barPct: 93
  },
  {
    id: 'stat-grid',
    category: 'India Power Grid Intensity',
    headline: 'Every 1 kWh Saved Avoids 0.72 kg of Thermal Coal Emissions',
    metric: '0.72 kg CO₂e / kWh',
    source: 'Central Electricity Authority (CEA) CO₂ Baseline Database',
    explanation: 'Because peak evening electricity demand relies heavily on thermal generation, evening conservation (7 PM – 11 PM) has the highest carbon reduction leverage.',
    comparisonLabel: 'Peak Evening Grid Impact vs Daytime Solar-Assisted Grid',
    barPct: 68
  }
];

const BASE_LEADERBOARD_USERS = [
  { id: 'u-1', name: 'Aarav Menon', group: 'Vadapalani Tech Block A', netWeeklyKg: 11.4, streak: 19, points: 1420, badge: 'Zero-Waste Architect' },
  { id: 'u-2', name: 'Diya Krishnan', group: 'Green Transit Club', netWeeklyKg: 13.8, streak: 15, points: 1290, badge: 'Grid Guardian' },
  { id: 'u-3', name: 'Rohan Subramanian', group: 'Stanza Living Cedar House', netWeeklyKg: 16.2, streak: 12, points: 1150, badge: 'Transit Pioneer' },
  { id: 'u-4', name: 'Sneha Natarajan', group: 'CyberSec Dept Cohort', netWeeklyKg: 19.5, streak: 10, points: 980, badge: 'Eco Optimizer' },
  { id: 'u-5', name: 'Vikramaditya R.', group: 'Hostel Block C', netWeeklyKg: 24.1, streak: 7, points: 810, badge: 'Carbon Aware' },
  { id: 'u-6', name: 'Karthik V.', group: 'Urban Commuters Guild', netWeeklyKg: 31.8, streak: 4, points: 540, badge: 'Carbon Novice' }
];

const CAMPUS_HOSTEL_LEADERBOARD = [
  { id: 'h-1', name: 'CS & CyberSec Department Cohort', participants: 142, avgWeeklyKg: 16.8, totalSavedKg: 612, trend: '-18% this wk' },
  { id: 'h-2', name: 'Stanza Living Off-Campus PG Network', participants: 98, avgWeeklyKg: 18.4, totalSavedKg: 445, trend: '-14% this wk' },
  { id: 'h-3', name: 'Metro Commuters Student Chapter', participants: 210, avgWeeklyKg: 19.1, totalSavedKg: 890, trend: '-22% this wk' },
  { id: 'h-4', name: 'Main Campus Hostel Block B', participants: 175, avgWeeklyKg: 23.6, totalSavedKg: 310, trend: '-9% this wk' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [transportMode, setTransportMode] = useState('petrol_bike');
  const [distanceBracket, setDistanceBracket] = useState('medium');
  const [acUsage, setAcUsage] = useState('standard_ac');
  const [applianceUsage, setApplianceUsage] = useState('standard_home');
  const [disposableCups, setDisposableCups] = useState('light_cups');
  const [foodPackaging, setFoodPackaging] = useState('occasional_takeaway');

  const [committedRecs, setCommittedRecs] = useState({
    transport: false,
    electricity: false,
    disposables: false
  });

  const [challenges, setChallenges] = useState(WEEKLY_CHALLENGES);
  const [streakDays, setStreakDays] = useState(6);
  const [streakFreezeAvailable, setStreakFreezeAvailable] = useState(true);
  const [weekCheckins, setWeekCheckins] = useState([true, true, true, true, true, true, false]);
  const [challengeCategory, setChallengeCategory] = useState('All');
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [leaderboardMode, setLeaderboardMode] = useState('individuals');
  const [toastMessage, setToastMessage] = useState(null);
  const [backendStatus, setBackendStatus] = useState('checking');
  const [backendFactors, setBackendFactors] = useState([]);
  const [backendCalculation, setBackendCalculation] = useState(null);
  const [backendBusy, setBackendBusy] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const applyPreset = (preset) => {
    setTransportMode(preset.transportMode);
    setDistanceBracket(preset.distanceBracket);
    setAcUsage(preset.acUsage);
    setApplianceUsage(preset.applianceUsage);
    setDisposableCups(preset.disposableCups);
    setFoodPackaging(preset.foodPackaging);
    setCommittedRecs({ transport: false, electricity: false, disposables: false });
    showToast(`Loaded "${preset.name}" habit profile — Receipt recalculated!`);
  };

  const footprintData = useMemo(() => {
    const tMode = TRANSPORT_MODES.find((m) => m.id === transportMode) || TRANSPORT_MODES[0];
    const dBracket = DISTANCE_BRACKETS.find((d) => d.id === distanceBracket) || DISTANCE_BRACKETS[1];
    const acOpt = AC_USAGE_OPTIONS.find((a) => a.id === acUsage) || AC_USAGE_OPTIONS[1];
    const appOpt = APPLIANCE_OPTIONS.find((a) => a.id === applianceUsage) || APPLIANCE_OPTIONS[1];
    const cupOpt = DISPOSABLE_CUPS_OPTIONS.find((c) => c.id === disposableCups) || DISPOSABLE_CUPS_OPTIONS[1];
    const foodOpt = FOOD_PACKAGING_OPTIONS.find((f) => f.id === foodPackaging) || FOOD_PACKAGING_OPTIONS[1];

    const dailyTransportKg = +(dBracket.kmPerDay * tMode.factorPerKm).toFixed(2);
    const dailyAcKg = +(acOpt.kwhPerDay * GRID_ELECTRICITY_FACTOR).toFixed(2);
    const dailyApplianceKg = +(appOpt.kwhPerDay * GRID_ELECTRICITY_FACTOR).toFixed(2);
    const dailyElectricityKg = +(dailyAcKg + dailyApplianceKg).toFixed(2);
    const dailyCupsKg = +cupOpt.kgCo2PerDay.toFixed(2);
    const dailyFoodPkgKg = +foodOpt.kgCo2PerDay.toFixed(2);
    const dailyDisposablesKg = +(dailyCupsKg + dailyFoodPkgKg).toFixed(2);
    const dailyTotalKg = +(dailyTransportKg + dailyElectricityKg + dailyDisposablesKg).toFixed(2);

    const weeklyTransportKg = +(dailyTransportKg * 7).toFixed(2);
    const weeklyAcKg = +(dailyAcKg * 7).toFixed(2);
    const weeklyApplianceKg = +(dailyApplianceKg * 7).toFixed(2);
    const weeklyElectricityKg = +(dailyElectricityKg * 7).toFixed(2);
    const weeklyCupsKg = +(dailyCupsKg * 7).toFixed(2);
    const weeklyFoodPkgKg = +(dailyFoodPkgKg * 7).toFixed(2);
    const weeklyDisposablesKg = +(dailyDisposablesKg * 7).toFixed(2);
    const weeklyTotalKg = +(weeklyTransportKg + weeklyElectricityKg + weeklyDisposablesKg).toFixed(2);

    const recommendations = [
      {
        id: 'electricity',
        category: 'Electricity & Cooling',
        title: acOpt.id === 'fan_only' ? 'Unplug phantom standby chargers & switch to smart LED strips' : 'Set AC to 26°C Eco Timer (3 hrs) + use ceiling fan circulation',
        positiveTip: 'Every 1°C increase in AC thermostat saves ~6% electricity with zero loss in sleep comfort!',
        weeklySavingsKg: acOpt.id === 'fan_only' ? +(weeklyElectricityKg * 0.2).toFixed(2) : +Math.max(3.5, weeklyAcKg * 0.48).toFixed(2),
        impactBadge: 'Biggest Bill Reducer'
      },
      {
        id: 'transport',
        category: 'Daily Commute',
        title: tMode.id === 'metro_bus' || tMode.id === 'ev_scooter' ? 'Combine 2 weekly errands into a single trip or walk short <2 km hops' : 'Swap solo vehicle rides for Metro / Bus or Carpool 3 days a week',
        positiveTip: 'Even a part-time switch (3 days/week) cuts commute fuel costs and emissions nearly in half.',
        weeklySavingsKg: tMode.id === 'metro_bus' || tMode.id === 'ev_scooter' ? +(weeklyTransportKg * 0.25).toFixed(2) : +Math.max(1.8, weeklyTransportKg * 0.45).toFixed(2),
        impactBadge: 'High Daily Leverage'
      },
      {
        id: 'disposables',
        category: 'Disposables & Packaging',
        title: cupOpt.id === 'reusable_bottle' && foodOpt.id === 'home_mess' ? 'Bring a cloth tote bag for groceries & refuse extra paper napkins' : 'Carry a reusable steel bottle & toggle "Don\'t send plastic cutlery" on food apps',
        positiveTip: 'Skipping single-use cups and plastic tubs keeps over 150 items out of landfills every semester.',
        weeklySavingsKg: cupOpt.id === 'reusable_bottle' && foodOpt.id === 'home_mess' ? 0.35 : +Math.max(1.2, weeklyDisposablesKg * 0.65).toFixed(2),
        impactBadge: 'Easiest Daily Win'
      }
    ];

    const activeWeeklySavingsKg = +(
      (committedRecs.transport ? recommendations[1].weeklySavingsKg : 0) +
      (committedRecs.electricity ? recommendations[0].weeklySavingsKg : 0) +
      (committedRecs.disposables ? recommendations[2].weeklySavingsKg : 0)
    ).toFixed(2);

    const netWeeklyKg = +Math.max(4.5, weeklyTotalKg - activeWeeklySavingsKg).toFixed(2);
    const annualProjectedKg = Math.round(netWeeklyKg * 52);
    const treesEquivalent = Math.max(1, Math.round((activeWeeklySavingsKg * 52) / 21));

    const dayMultipliers = [0.95, 1.04, 0.98, 1.06, 1.02, 0.88, 0.82];
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const netDailyKg = netWeeklyKg / 7;
    const weeklyTrend = daysOfWeek.map((day, idx) => ({
      day,
      kg: +(netDailyKg * dayMultipliers[idx]).toFixed(2)
    }));

    return {
      tMode,
      dBracket,
      acOpt,
      appOpt,
      cupOpt,
      foodOpt,
      dailyTransportKg,
      dailyAcKg,
      dailyApplianceKg,
      dailyElectricityKg,
      dailyCupsKg,
      dailyFoodPkgKg,
      dailyDisposablesKg,
      dailyTotalKg,
      weeklyTransportKg,
      weeklyAcKg,
      weeklyApplianceKg,
      weeklyElectricityKg,
      weeklyCupsKg,
      weeklyFoodPkgKg,
      weeklyDisposablesKg,
      weeklyTotalKg,
      recommendations,
      activeWeeklySavingsKg,
      netWeeklyKg,
      annualProjectedKg,
      treesEquivalent,
      weeklyTrend
    };
  }, [transportMode, distanceBracket, acUsage, applianceUsage, disposableCups, foodPackaging, committedRecs]);

  // Connect to Flask and load the factors stored in Supabase.
  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE_URL}/factors`)
      .then((response) => {
        if (!response.ok) throw new Error(`Factors API returned ${response.status}`);
        return response.json();
      })
      .then((factors) => {
        if (cancelled) return;
        setBackendFactors(Array.isArray(factors) ? factors : []);
        setBackendStatus('connected');
      })
      .catch((error) => {
        if (cancelled) return;
        console.error('EcoReceipt backend connection failed:', error);
        setBackendStatus('offline');
      });
    return () => { cancelled = true; };
  }, []);

  // Send supported activity calculations to Flask. Receipt persistence is not
  // enabled yet because user_receipts requires an authenticated RLS policy.
  const handleSaveReceiptSnapshot = async () => {
    if (backendStatus !== 'connected') {
      showToast('Backend is not reachable. Check Wi-Fi, Flask, and API URL.');
      return;
    }

    setBackendBusy(true);
    try {
      const requests = [];
      const dailyDistance = footprintData.dBracket.kmPerDay * 7;
      if (transportMode === 'solo_car') {
        requests.push({ activity: 'car travel', quantity: dailyDistance });
      } else if (transportMode === 'metro_bus') {
        // This UI option combines metro, bus and suburban train; the current
        // backend factor table only provides a bus factor for this selection.
        requests.push({ activity: 'bus travel', quantity: dailyDistance });
      }

      const weeklyElectricityKwh = (footprintData.acOpt.kwhPerDay + footprintData.appOpt.kwhPerDay) * 7;
      requests.push({ activity: 'electricity', quantity: weeklyElectricityKwh });

      if (disposableCups === 'light_cups') {
        requests.push({ activity: 'plastic bottle', quantity: 2 * 7 });
      } else if (disposableCups === 'heavy_bottles') {
        requests.push({ activity: 'plastic bottle', quantity: 4 * 7 });
      }

      
const results = await Promise.all(
  requests.map(async (item) => {
    const response = await fetch(`${API_BASE_URL}/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || `Calculation API returned ${response.status}`
      );
    }

    return result;
  })
);

const backendTotal = results.reduce(
  (sum, result) =>
    sum + Number(result.estimated_emissions_kg_co2e),
  0
);

setBackendCalculation({
  results,
  total: Number(backendTotal.toFixed(4)),
  createdAt: new Date().toLocaleTimeString()
});

//showToast(
  //`Backend calculated ${results.length} supported items: ${backendTotal.toFixed(2)} kg CO₂e/wk (estimate).`
//);

const saveResponse = await fetch(`${API_BASE_URL}/receipts`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    total_emissions: Number(backendTotal.toFixed(4)),
    receipt_data: {
      source: 'ecoreceipt',
      period: 'weekly',
      results,
      saved_at: new Date().toISOString()
    }
  })
});

const saveResult = await saveResponse.json();

if (!saveResponse.ok) {
  throw new Error(
    saveResult.error || `Receipt save failed: ${saveResponse.status}`
  );
}

showToast(
  `Receipt saved! ${backendTotal.toFixed(2)} kg CO₂e/wk.`
);


    } catch (error) {
      console.error('EcoReceipt backend calculation failed:', error);
      showToast(`Backend calculation failed: ${error.message}`);
    } finally {
      setBackendBusy(false);
    }
  };

  // Gamification & XP Calculation
  const gamificationStats = useMemo(() => {
    const basePoints = challenges.reduce((acc, c) => acc + c.completedDays * 35, 0);
    const swapBonus = Object.values(committedRecs).filter(Boolean).length * 120;
    const streakBonus = streakDays * 25;
    const multiplier = streakDays >= 7 ? 1.5 : 1.2;
    const totalXp = Math.round((basePoints + swapBonus + streakBonus) * multiplier);

    let rankTitle = 'Carbon Novice';
    let nextThreshold = 800;
    if (totalXp >= 1400) {
      rankTitle = 'Zero-Waste Architect';
      nextThreshold = 2000;
    } else if (totalXp >= 1000) {
      rankTitle = 'Grid Guardian';
      nextThreshold = 1400;
    } else if (totalXp >= 700) {
      rankTitle = 'Transit Pioneer';
      nextThreshold = 1000;
    }

    const levelProgressPct = Math.min(100, Math.round((totalXp / nextThreshold) * 100));
    const completedChallengesCount = challenges.filter((c) => c.completedDays >= c.targetDays).length;

    const badges = [
      { id: 'b-1', name: '7-Day Streak Master', desc: 'Maintain a 7+ day low-carbon habit streak', unlocked: streakDays >= 7 },
      { id: 'b-2', name: '26°C Grid Guardian', desc: 'Adopt Eco AC or Fan-Only cooling', unlocked: acUsage === 'fan_only' || acUsage === 'eco_ac' || committedRecs.electricity },
      { id: 'b-3', name: 'Plastic-Free Hydrator', desc: 'Use reusable bottle or commit to disposable swap', unlocked: disposableCups === 'reusable_bottle' || committedRecs.disposables },
      { id: 'b-4', name: 'Sub-25kg Club', desc: 'Bring Net Weekly Receipt under 25 kg CO₂e', unlocked: footprintData.netWeeklyKg <= 25 }
    ];

    return { totalXp, rankTitle, nextThreshold, levelProgressPct, multiplier, completedChallengesCount, badges };
  }, [challenges, committedRecs, streakDays, acUsage, disposableCups, footprintData.netWeeklyKg]);

  // Dynamic Live Leaderboard
  const sortedLeaderboard = useMemo(() => {
    const currentUserEntry = {
      id: 'u-you',
      name: 'You (Live Receipt)',
      group: 'SRM Vadapalani • CS CyberSec',
      netWeeklyKg: footprintData.netWeeklyKg,
      streak: streakDays,
      points: gamificationStats.totalXp,
      badge: gamificationStats.rankTitle,
      isCurrentUser: true
    };
    return [...BASE_LEADERBOARD_USERS, currentUserEntry].sort((a, b) => a.netWeeklyKg - b.netWeeklyKg);
  }, [footprintData.netWeeklyKg, streakDays, gamificationStats]);

  const transportPct = Math.round((footprintData.weeklyTransportKg / Math.max(0.1, footprintData.weeklyTotalKg)) * 100);
  const electricityPct = Math.round((footprintData.weeklyElectricityKg / Math.max(0.1, footprintData.weeklyTotalKg)) * 100);
  const disposablesPct = Math.max(0, 100 - transportPct - electricityPct);

  const toggleCommitRec = (id, title) => {
    setCommittedRecs((prev) => {
      const nextState = !prev[id];
      if (nextState) {
        showToast(`Applied habit swap: "${title}" — Leaderboard rank & XP updated!`);
      }
      return { ...prev, [id]: nextState };
    });
  };

  const handleAdvanceChallenge = (chId) => {
    setChallenges((prev) =>
      prev.map((c) => {
        if (c.id !== chId) return c;
        const nextDays = c.completedDays < c.targetDays ? c.completedDays + 1 : 0;
        if (nextDays === c.targetDays) {
          setStreakDays((s) => s + 1);
          showToast(`Challenge Completed! ${c.reward} unlocked!`);
        }
        return { ...c, completedDays: nextDays };
      })
    );
  };

  const toggleDayCheckin = (idx) => {
    setWeekCheckins((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      const activeCount = updated.filter(Boolean).length;
      setStreakDays(activeCount);
      if (updated[idx]) {
        showToast(`Day ${idx + 1} habit check-in verified! +35 XP`);
      }
      return updated;
    });
  };

  const currentQuote = MOTIVATIONAL_QUOTES[quoteIdx];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16 selection:bg-emerald-500 selection:text-slate-950">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up bg-emerald-500 text-slate-950 px-5 py-3.5 rounded-2xl shadow-2xl shadow-emerald-500/30 border border-emerald-300 flex items-center gap-3 font-bold text-sm">
          <Sparkles size={22} strokeWidth={2.4} className="shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Sticky Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-900/85 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Receipt size={25} strokeWidth={2.3} className="text-slate-950 shrink-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">EcoReceipt</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                  {gamificationStats.rankTitle} • {gamificationStats.totalXp} XP
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Itemized Carbon Receipt • Behavioral Gamification • Live Campus Leaderboard
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-1 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800 overflow-x-auto">
            {[
              { id: 'dashboard', label: '1. Receipt', icon: Receipt },
              { id: 'questionnaire', label: '2. Questionnaire', icon: Sliders },
              { id: 'challenges', label: '3. Streaks & XP', icon: Flame },
              { id: 'leaderboard', label: '4. Leaderboard', icon: Trophy },
              { id: 'insights', label: '5. Stats & Quotes', icon: BookOpen },
              { id: 'factors', label: '6. Factors', icon: Table }
            ].map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 font-bold'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                  }`}
                >
                  <IconComp size={16} strokeWidth={2.2} className="shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Top Strip: Motivational Quote Banner + Quick Demo Profiles + 4 KPI Cards */}
      <section className="border-b border-slate-800/80 bg-gradient-to-b from-emerald-950/25 via-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 space-y-4">
          <div className="bg-slate-900/90 border border-emerald-500/25 rounded-2xl p-3.5 px-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-4xl">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Quote size={18} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 italic">
                  "{currentQuote.quote}" — <span className="text-emerald-400 not-italic font-bold">{currentQuote.author}</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  <span className="text-amber-400 font-bold">Statistical Fact:</span> {currentQuote.statHighlight}
                </p>
              </div>
            </div>
            <button
              onClick={() => setQuoteIdx((i) => (i + 1) % MOTIVATIONAL_QUOTES.length)}
              className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-emerald-300 border border-slate-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <RefreshCw size={13} />
              <span>Next Quote</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
                <ShieldCheck size={15} strokeWidth={2.2} />
                <span>Real-Time Carbon Telemetry • Grounded in CEA India & DEFRA Conversion Factors</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Turn Everyday Choices Into an Itemized{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Environmental Receipt</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-2 rounded-2xl border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 px-2">Quick Demo Profiles:</span>
              {DEMO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-emerald-500/20 text-xs font-semibold text-slate-200 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 transition cursor-pointer"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${backendStatus === 'connected' ? 'bg-emerald-400' : backendStatus === 'checking' ? 'bg-amber-400' : 'bg-rose-400'}`} />
              <span className="font-semibold text-slate-200">Flask + Supabase: {backendStatus === 'connected' ? 'Connected' : backendStatus === 'checking' ? 'Connecting…' : 'Unavailable'}</span>
              {backendStatus === 'connected' && <span className="text-slate-400">({backendFactors.length} factors loaded)</span>}
            </div>
            {backendStatus === 'offline' && <span className="text-rose-300">Check that Flask is running at {API_BASE_URL}</span>}
          </div>

          {/* 4 Live Summary KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Receipt size={26} strokeWidth={2.2} className="text-emerald-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Net Weekly Footprint</span>
                <div className="text-2xl font-black text-white">{footprintData.netWeeklyKg} <span className="text-sm font-semibold text-slate-400">kg CO₂e</span></div>
                <span className="text-[11px] text-emerald-400 font-semibold">{footprintData.netWeeklyKg <= 35 ? 'Below Sustainable Target (35 kg/wk)' : 'Above 35 kg/wk Target — See 3 Tips'}</span>
              </div>
            </div>

            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0">
                <TrendingDown size={26} strokeWidth={2.2} className="text-teal-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Active Habit Savings</span>
                <div className="text-2xl font-black text-emerald-400">-{footprintData.activeWeeklySavingsKg} <span className="text-sm font-semibold text-slate-400">kg / wk</span></div>
                <span className="text-[11px] text-slate-400">Live Leaderboard Rank: #{sortedLeaderboard.findIndex((u) => u.isCurrentUser) + 1}</span>
              </div>
            </div>

            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Flame size={26} strokeWidth={2.2} className="text-amber-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Habit Streak & Multiplier</span>
                <div className="text-2xl font-black text-white">{streakDays} Days <span className="text-xs font-bold text-amber-400">({gamificationStats.multiplier}x XP)</span></div>
                <span className="text-[11px] text-amber-400 font-semibold">{gamificationStats.totalXp} XP • {gamificationStats.rankTitle}</span>
              </div>
            </div>

            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
                <Trees size={26} strokeWidth={2.2} className="text-sky-400" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Annual Impact Equivalent</span>
                <div className="text-2xl font-black text-white">{footprintData.annualProjectedKg} <span className="text-sm font-semibold text-slate-400">kg / yr</span></div>
                <span className="text-[11px] text-sky-400 font-semibold">Swaps equal ~{footprintData.treesEquivalent} trees planted/yr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* =============================================================== */}
        {/* TAB 1: LIVE RECEIPT & DASHBOARD                                 */}
        {/* =============================================================== */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in-up items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-amber-50 text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-emerald-500/30 font-mono relative overflow-hidden">
                <div className="flex justify-between items-center border-b-2 border-dashed border-slate-300 pb-4 mb-4">
                  <div>
                    <div className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
                      <Receipt size={22} strokeWidth={2.5} className="text-emerald-700" />
                      <span>ECORECEIPT MART</span>
                    </div>
                    <p className="text-[11px] text-slate-600">ENVIRONMENTAL IMPACT STATEMENT (ESTIMATE)</p>
                  </div>
                  <div className="text-right text-[11px] text-slate-600">
                    <div>BILL #ER-2026-05</div>
                    <div>CYCLE: 7-DAY WEEKLY</div>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between bg-emerald-950/10 px-3 py-2 rounded-xl border border-emerald-800/20 font-sans">
                  <span className="text-xs font-semibold text-slate-700">Want to change your daily habits?</span>
                  <button onClick={() => setActiveTab('questionnaire')} className="text-xs font-bold text-emerald-800 hover:text-emerald-600 flex items-center gap-1 cursor-pointer">
                    <span>Edit Habits</span>
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="grid grid-cols-12 text-[11px] font-bold text-slate-500 border-b border-slate-300 pb-1.5 mb-3">
                  <div className="col-span-6">ITEM / HABIT</div>
                  <div className="col-span-3 text-right">DAILY</div>
                  <div className="col-span-3 text-right">WEEKLY</div>
                </div>

                <div className="space-y-3 text-xs border-b-2 border-dashed border-slate-300 pb-4 mb-4">
                  <div>
                    <div className="grid grid-cols-12 font-bold text-slate-900">
                      <div className="col-span-6">01. DAILY COMMUTE</div>
                      <div className="col-span-3 text-right">{footprintData.dailyTransportKg} kg</div>
                      <div className="col-span-3 text-right">{footprintData.weeklyTransportKg} kg</div>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.tMode.label}</div>
                  </div>
                  <div>
                    <div className="grid grid-cols-12 font-bold text-slate-900">
                      <div className="col-span-6">02. COOLING & AC</div>
                      <div className="col-span-3 text-right">{footprintData.dailyAcKg} kg</div>
                      <div className="col-span-3 text-right">{footprintData.weeklyAcKg} kg</div>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.acOpt.label}</div>
                  </div>
                  <div>
                    <div className="grid grid-cols-12 font-bold text-slate-900">
                      <div className="col-span-6">03. PLUG & TECH LOADS</div>
                      <div className="col-span-3 text-right">{footprintData.dailyApplianceKg} kg</div>
                      <div className="col-span-3 text-right">{footprintData.weeklyApplianceKg} kg</div>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.appOpt.label}</div>
                  </div>
                  <div>
                    <div className="grid grid-cols-12 font-bold text-slate-900">
                      <div className="col-span-6">04. DISPOSABLE CUPS</div>
                      <div className="col-span-3 text-right">{footprintData.dailyCupsKg} kg</div>
                      <div className="col-span-3 text-right">{footprintData.weeklyCupsKg} kg</div>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.cupOpt.itemCountLabel}</div>
                  </div>
                  <div>
                    <div className="grid grid-cols-12 font-bold text-slate-900">
                      <div className="col-span-6">05. FOOD PACKAGING</div>
                      <div className="col-span-3 text-right">{footprintData.dailyFoodPkgKg} kg</div>
                      <div className="col-span-3 text-right">{footprintData.weeklyFoodPkgKg} kg</div>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{footprintData.foodOpt.itemCountLabel}</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs border-b-2 border-dashed border-slate-300 pb-4 mb-4">
                  <div className="flex justify-between text-slate-700">
                    <span>GROSS WEEKLY FOOTPRINT:</span>
                    <span className="font-bold">{footprintData.weeklyTotalKg} kg CO₂e</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>GREEN HABIT SWAP DISCOUNT:</span>
                    <span>-{footprintData.activeWeeklySavingsKg} kg CO₂e</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-950 pt-1">
                    <span>NET WEEKLY TOTAL:</span>
                    <span>{footprintData.netWeeklyKg} kg CO₂e</span>
                  </div>
                </div>

                <div className="mb-4 font-sans">
                  <button
                    onClick={handleSaveReceiptSnapshot}
                    disabled={backendBusy || backendStatus !== 'connected'}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 size={16} strokeWidth={2.3} />
                    <span>{backendBusy ? 'Calculating with Backend…' : 'Calculate Supported Items via Backend'}</span>
                  </button>
                  {backendCalculation && (
                    <div className="mt-3 rounded-xl border border-emerald-700/40 bg-emerald-950/30 p-3 text-xs text-slate-800">
                      <div className="font-bold text-emerald-800">Backend calculation result</div>
                      <div className="mt-1 text-slate-700">Supported items total: <strong>{backendCalculation.total} kg CO₂e</strong> for the selected weekly quantities.</div>
                      <div className="mt-1 text-[10px] text-slate-600">Calculated at {backendCalculation.createdAt}. This is not saved as a receipt yet; secure receipt storage is still pending.</div>
                      <ul className="mt-2 space-y-1">
                        {backendCalculation.results.map((result, index) => (
                          <li key={`${result.activity}-${index}`} className="flex justify-between gap-3">
                            <span>{result.activity} ({result.quantity} {result.unit})</span>
                            <strong>{result.estimated_emissions_kg_co2e} kg</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="text-center space-y-2">
                  <p className="text-[11px] text-slate-600 font-sans">*All figures are estimates based on published conversion factors.</p>
                  <div className="h-9 w-full flex items-center justify-center gap-0.5 pt-1 opacity-80">
                    {[2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2].map((w, idx) => (
                      <div key={idx} className="h-full bg-slate-900" style={{ width: `${w * 2}px` }} />
                    ))}
                  </div>
                  <div className="text-[10px] tracking-widest text-slate-500">THANK YOU FOR CHOOSING LOW-CARBON HABITS</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <BarChart3 size={24} strokeWidth={2.2} className="text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-white">Weekly Footprint Breakdown & 7-Day Trend Chart</h2>
                    <p className="text-xs text-slate-400">Visualizing how transport, electricity, and disposables accumulate over a week</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-sky-400">Transport: {footprintData.weeklyTransportKg} kg ({transportPct}%)</span>
                    <span className="text-amber-400">Electricity: {footprintData.weeklyElectricityKg} kg ({electricityPct}%)</span>
                    <span className="text-rose-400">Disposables: {footprintData.weeklyDisposablesKg} kg ({disposablesPct}%)</span>
                  </div>

                  <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800">
                    <div className="bg-sky-500 h-full transition-all duration-500" style={{ width: `${transportPct}%` }} />
                    <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: `${electricityPct}%` }} />
                    <div className="bg-rose-500 h-full transition-all duration-500" style={{ width: `${disposablesPct}%` }} />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold text-slate-300">Daily Emissions (Mon – Sun) in kg CO₂e</span>
                    <span className="text-emerald-400 font-semibold">Dashed Line = 5.0 kg/day Sustainable Target</span>
                  </div>

                  <div className="h-44 bg-slate-950/90 border border-slate-800/90 rounded-2xl p-4 flex items-end justify-between gap-3 relative">
                    <div className="absolute left-4 right-4 border-t-2 border-dashed border-emerald-500/40 pointer-events-none flex justify-end" style={{ bottom: '45%' }}>
                      <span className="text-[10px] text-emerald-400 bg-slate-950 px-1.5 -mt-2.5">5.0 kg target</span>
                    </div>

                    {footprintData.weeklyTrend.map((d) => {
                      const heightPct = Math.min(100, Math.max(12, Math.round((d.kg / 14) * 100)));
                      const isLow = d.kg <= 5.0;
                      return (
                        <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end z-10">
                          <span className="text-[11px] font-bold text-slate-300">{d.kg}</span>
                          <div className="w-full max-w-[42px] bg-slate-900 rounded-t-xl overflow-hidden flex items-end h-28">
                            <div
                              className={`w-full rounded-t-xl transition-all duration-500 ${isLow ? 'bg-gradient-to-t from-emerald-600 to-teal-400' : 'bg-gradient-to-t from-amber-600 to-amber-400'}`}
                              style={{ height: `${heightPct}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-slate-400">{d.day}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0">
                    <HeartHandshake size={24} strokeWidth={2.2} className="text-teal-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-white">3 Positive Improvement Recommendations</h2>
                    <p className="text-xs text-slate-400">Check any box below to preview how small, achievable swaps lower your weekly receipt & boost your Leaderboard rank</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {footprintData.recommendations.map((rec, index) => {
                    const isCommitted = !!committedRecs[rec.id];
                    return (
                      <div
                        key={rec.id}
                        onClick={() => toggleCommitRec(rec.id, rec.title)}
                        className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 ${
                          isCommitted ? 'bg-emerald-950/25 border-emerald-500/50 shadow-lg' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <button className="mt-0.5 text-emerald-400 shrink-0 cursor-pointer">
                            {isCommitted ? <CheckSquare size={22} strokeWidth={2.3} className="text-emerald-400" /> : <Square size={22} strokeWidth={2.2} className="text-slate-500" />}
                          </button>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Tip {index + 1} • {rec.category}</span>
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-medium">{rec.impactBadge}</span>
                            </div>
                            <h3 className="text-sm font-bold text-white">{rec.title}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{rec.positiveTip}</p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="inline-block text-xs font-extrabold px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Save {rec.weeklySavingsKg} kg/wk
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* TAB 2: QUESTIONNAIRE                                            */}
        {/* =============================================================== */}
        {activeTab === 'questionnaire' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Sliders size={26} strokeWidth={2.2} className="text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">Daily Habit Questionnaire (Multiple-Choice)</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Select your typical daily transport, electricity, and disposable habits.</p>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('dashboard')}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <Receipt size={18} strokeWidth={2.3} />
                <span>View Updated Receipt ({footprintData.netWeeklyKg} kg/wk)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
                    <Car size={24} strokeWidth={2.2} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">1. Daily Transport</h3>
                    <p className="text-xs text-slate-400">Current: {footprintData.weeklyTransportKg} kg CO₂e / week</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 block">Primary Commute Mode:</label>
                  <div className="space-y-2">
                    {TRANSPORT_MODES.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setTransportMode(m.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
                          transportMode === m.id ? 'bg-sky-500/20 border-sky-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{m.label}</span>
                          <span className="text-[11px] text-sky-300 font-mono">{m.unitLabel}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="text-xs font-bold text-slate-300 block">Daily Round-Trip Distance:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {DISTANCE_BRACKETS.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setDistanceBracket(d.id)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                          distanceBracket === d.id ? 'bg-sky-500 text-slate-950 border-sky-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Zap size={24} strokeWidth={2.2} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">2. Electricity & Cooling</h3>
                    <p className="text-xs text-slate-400">Current: {footprintData.weeklyElectricityKg} kg CO₂e / week</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 block">Room Cooling & Air Conditioning:</label>
                  <div className="space-y-2">
                    {AC_USAGE_OPTIONS.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setAcUsage(a.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
                          acUsage === a.id ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{a.label}</span>
                          <span className="text-[11px] text-amber-300 font-mono">~{a.kwhPerDay} kWh/d</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="text-xs font-bold text-slate-300 block">Appliances & Device Power Habits:</label>
                  <div className="space-y-2">
                    {APPLIANCE_OPTIONS.map((ap) => (
                      <button
                        key={ap.id}
                        onClick={() => setApplianceUsage(ap.id)}
                        className={`w-full text-left p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                          applianceUsage === ap.id ? 'bg-amber-500/20 border-amber-400 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between">
                          <span>{ap.label}</span>
                          <span className="text-amber-300 font-mono">{ap.kwhPerDay} kWh/d</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center shrink-0">
                    <Coffee size={24} strokeWidth={2.2} className="text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">3. Disposables & Packaging</h3>
                    <p className="text-xs text-slate-400">Current: {footprintData.weeklyDisposablesKg} kg CO₂e / week</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 block">Single-Use Cups & Beverage Bottles:</label>
                  <div className="space-y-2">
                    {DISPOSABLE_CUPS_OPTIONS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setDisposableCups(c.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
                          disposableCups === c.id ? 'bg-rose-500/20 border-rose-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{c.label}</span>
                          <span className="text-[11px] text-rose-300 font-mono">{c.kgCo2PerDay} kg/d</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <label className="text-xs font-bold text-slate-300 block">Food Delivery & Takeaway Containers:</label>
                  <div className="space-y-2">
                    {FOOD_PACKAGING_OPTIONS.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFoodPackaging(f.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
                          foodPackaging === f.id ? 'bg-rose-500/20 border-rose-400 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{f.label}</span>
                          <span className="text-[11px] text-rose-300 font-mono">{f.kgCo2PerDay} kg/d</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* TAB 3: GAMIFIED STREAKS, XP LEVELING, 7-DAY MATRIX & BADGES     */}
        {/* =============================================================== */}
        {activeTab === 'challenges' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Flame size={28} strokeWidth={2.2} className="text-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-extrabold text-white">{gamificationStats.rankTitle}</h2>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                          {gamificationStats.multiplier}x Streak Multiplier
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {gamificationStats.totalXp} / {gamificationStats.nextThreshold} XP to next sustainability tier
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (streakFreezeAvailable) {
                        setStreakFreezeAvailable(false);
                        showToast('Streak Freeze Shield Armed! Your streak is protected for 24 hrs.');
                      } else {
                        showToast('Streak Shield is already active for this week!');
                      }
                    }}
                    className={`px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition ${
                      streakFreezeAvailable
                        ? 'bg-sky-500/15 border-sky-500/40 text-sky-300 hover:bg-sky-500/25'
                        : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    }`}
                  >
                    <ShieldCheck size={16} />
                    <span>{streakFreezeAvailable ? 'Activate Streak Freeze (1 Left)' : 'Streak Shield Active ✓'}</span>
                  </button>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-emerald-400">XP Progression</span>
                    <span className="text-slate-300">{gamificationStats.levelProgressPct}%</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 transition-all duration-500"
                      style={{ width: `${gamificationStats.levelProgressPct}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">
                      7-Day Habit Check-In Matrix (Click any day to verify low-carbon log):
                    </span>
                    <span className="text-xs font-extrabold text-amber-400">
                      Active Streak: {streakDays} Days 🔥
                    </span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((dayLabel, idx) => {
                      const checked = weekCheckins[idx];
                      return (
                        <button
                          key={dayLabel}
                          onClick={() => toggleDayCheckin(idx)}
                          className={`p-3 rounded-2xl border text-center transition cursor-pointer flex flex-col items-center gap-1.5 ${
                            checked
                              ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/10'
                              : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-700'
                          }`}
                        >
                          <span className="text-[11px] font-bold">{dayLabel}</span>
                          <CheckCircle2 size={18} className={checked ? 'text-emerald-400' : 'text-slate-700'} />
                          <span className="text-[10px] font-semibold">{checked ? '+35 XP' : 'Log'}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Award size={22} className="text-emerald-400" />
                    <h3 className="text-base font-extrabold text-white">Unlockable Milestone Badges</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    {gamificationStats.badges.filter((b) => b.unlocked).length} / {gamificationStats.badges.length} Unlocked
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gamificationStats.badges.map((b) => (
                    <div
                      key={b.id}
                      className={`p-3.5 rounded-2xl border flex flex-col justify-between gap-2 ${
                        b.unlocked
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-white'
                          : 'bg-slate-950/60 border-slate-800/80 text-slate-500 opacity-75'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold">{b.name}</span>
                        {b.unlocked ? <Unlock size={15} className="text-emerald-400" /> : <Lock size={15} className="text-slate-600" />}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{b.desc}</p>
                      <span className={`text-[10px] font-bold uppercase ${b.unlocked ? 'text-emerald-400' : 'text-slate-600'}`}>
                        {b.unlocked ? 'Unlocked ✓' : 'Locked — Adjust Habits'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold text-white">Active Weekly Quests ({challenges.length})</h3>
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                {['All', 'Energy', 'Transit', 'Waste'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setChallengeCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition ${
                      challengeCategory === cat ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges
                .filter((c) => challengeCategory === 'All' || c.category === challengeCategory)
                .map((ch) => {
                  const pct = Math.round((ch.completedDays / ch.targetDays) * 100);
                  const isDone = ch.completedDays >= ch.targetDays;
                  return (
                    <div
                      key={ch.id}
                      className={`rounded-3xl border p-6 flex flex-col justify-between gap-5 transition-all ${
                        isDone ? 'bg-emerald-950/25 border-emerald-500/40 shadow-lg' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-emerald-300">
                            {ch.reward}
                          </span>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                            {ch.category || 'Eco'} • {ch.completedDays}/{ch.targetDays}d
                          </span>
                        </div>
                        <h3 className="text-base font-extrabold text-white">{ch.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{ch.desc}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500" style={{ width: `${pct}%` }} />
                        </div>

                        <button
                          onClick={() => handleAdvanceChallenge(ch.id)}
                          className={`w-full py-2.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                            isDone ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-white'
                          }`}
                        >
                          {isDone ? 'Completed ✓ (Click to Replay)' : "+ Log Today's Progress"}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* TAB 4: LIVE CAMPUS & COMMUNITY LEADERBOARD                      */}
        {/* =============================================================== */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Trophy size={26} strokeWidth={2.2} className="text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">Live Low-Carbon Community Leaderboard</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Ranked by lowest Net Weekly Carbon Receipt (kg CO₂e / week) and active habit streaks. Adjust your receipt to climb live!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setLeaderboardMode('individuals')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
                    leaderboardMode === 'individuals' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Individual Champions
                </button>
                <button
                  onClick={() => setLeaderboardMode('campuses')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
                    leaderboardMode === 'campuses' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Hostels & Departments
                </button>
              </div>
            </div>

            {leaderboardMode === 'individuals' ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase bg-slate-950/60">
                        <th className="py-3.5 px-5">Rank</th>
                        <th className="py-3.5 px-5">Participant</th>
                        <th className="py-3.5 px-5">Cohort / Hostel</th>
                        <th className="py-3.5 px-5">Sustainability Tier</th>
                        <th className="py-3.5 px-5">Streak</th>
                        <th className="py-3.5 px-5">XP Score</th>
                        <th className="py-3.5 px-5 text-right">Net Weekly Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70">
                      {sortedLeaderboard.map((u, idx) => {
                        const rank = idx + 1;
                        return (
                          <tr
                            key={u.id}
                            className={`transition ${
                              u.isCurrentUser ? 'bg-emerald-500/15 border-l-4 border-l-emerald-400 font-bold text-white' : 'text-slate-200 hover:bg-slate-950/50'
                            }`}
                          >
                            <td className="py-4 px-5 font-black text-sm">
                              {rank === 1 ? '🥇 #1' : rank === 2 ? '🥈 #2' : rank === 3 ? '🥉 #3' : `#${rank}`}
                            </td>
                            <td className="py-4 px-5">
                              <div className="flex items-center gap-2">
                                <span>{u.name}</span>
                                {u.isCurrentUser && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black">
                                    LIVE YOU
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-5 text-slate-400">{u.group}</td>
                            <td className="py-4 px-5">
                              <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-emerald-300 text-[11px] font-semibold">
                                {u.badge}
                              </span>
                            </td>
                            <td className="py-4 px-5 text-amber-400 font-bold">{u.streak}d 🔥</td>
                            <td className="py-4 px-5 font-mono text-slate-300">{u.points} XP</td>
                            <td className="py-4 px-5 text-right font-mono font-black text-emerald-400 text-sm">
                              {u.netWeeklyKg} kg CO₂e
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CAMPUS_HOSTEL_LEADERBOARD.map((h, idx) => (
                  <div key={h.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300">
                        Rank #{idx + 1} Cohort
                      </span>
                      <span className="text-xs font-bold text-emerald-400">{h.trend}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-white">{h.name}</h3>
                    <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800 text-center">
                      <div className="bg-slate-950 p-3 rounded-2xl">
                        <span className="text-[11px] text-slate-400 block">Active Members</span>
                        <span className="text-base font-black text-white">{h.participants}</span>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-2xl">
                        <span className="text-[11px] text-slate-400 block">Avg Receipt</span>
                        <span className="text-base font-black text-emerald-400">{h.avgWeeklyKg} kg</span>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-2xl">
                        <span className="text-[11px] text-slate-400 block">CO₂e Saved</span>
                        <span className="text-base font-black text-sky-400">{h.totalSavedKg} kg</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* =============================================================== */}
        {/* TAB 5: STATISTICAL FIGURES & MOTIVATIONAL INSIGHTS HUB          */}
        {/* =============================================================== */}
        {activeTab === 'insights' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-2">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <BookOpen size={26} strokeWidth={2.2} className="text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">Climate Statistical Figures & Behavioral Science Hub</h2>
                  <p className="text-xs text-slate-400">
                    Empirical benchmarks from CEA India, BEE, and lifecycle studies showing why micro-habits compound at scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {STATISTICAL_FIGURES.map((st) => (
                <div key={st.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">{st.category}</span>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                        {st.metric}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-white">{st.headline}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{st.explanation}</p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                      <span>{st.comparisonLabel}</span>
                      <span className="text-emerald-400">{st.barPct}% Reduction Potential</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400" style={{ width: `${st.barPct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-500">Source: {st.source}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Quote size={18} className="text-emerald-400" />
                <span>Curated Voices on Collective Action</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOTIVATIONAL_QUOTES.map((q, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <p className="text-xs text-slate-200 italic leading-relaxed">"{q.quote}"</p>
                    <div className="text-[11px] font-bold text-emerald-400">
                      — {q.author} <span className="text-slate-500 font-normal">({q.role})</span>
                    </div>
                    <div className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                      📊 {q.statHighlight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* TAB 6: CONVERSION FACTORS TABLE                                 */}
        {/* =============================================================== */}
        {activeTab === 'factors' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Table size={26} strokeWidth={2.2} className="text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">Predefined Emission Conversion Factors Lookup Table</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Transparent arithmetic lookup table used to calculate your Environmental Receipt.</p>
                </div>
              </div>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 uppercase">
                      <th className="py-3 px-4">Habit Category</th>
                      <th className="py-3 px-4">Activity / Item</th>
                      <th className="py-3 px-4">Conversion Factor</th>
                      <th className="py-3 px-4">Formula Used in Receipt</th>
                      <th className="py-3 px-4">Reference Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70 text-slate-200">
                    <tr>
                      <td className="py-3 px-4 font-bold text-sky-400">Transport</td>
                      <td className="py-3 px-4">Metro / Bus / Suburban Rail</td>
                      <td className="py-3 px-4 font-mono">0.035 kg CO₂e / km</td>
                      <td className="py-3 px-4 font-mono">Daily km × 0.035 × 7 days</td>
                      <td className="py-3 px-4 text-slate-400">India GHG Program / DEFRA</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-sky-400">Transport</td>
                      <td className="py-3 px-4">Petrol Two-Wheeler (110–150cc)</td>
                      <td className="py-3 px-4 font-mono">0.068 kg CO₂e / km</td>
                      <td className="py-3 px-4 font-mono">Daily km × 0.068 × 7 days</td>
                      <td className="py-3 px-4 text-slate-400">Two-Wheeler Fuel Lifecycle</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-sky-400">Transport</td>
                      <td className="py-3 px-4">Solo Passenger Car (Petrol/Diesel)</td>
                      <td className="py-3 px-4 font-mono">0.192 kg CO₂e / km</td>
                      <td className="py-3 px-4 font-mono">Daily km × 0.192 × 7 days</td>
                      <td className="py-3 px-4 text-slate-400">IPCC Passenger Vehicle Benchmark</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-amber-400">Electricity</td>
                      <td className="py-3 px-4">Grid Electricity Consumption</td>
                      <td className="py-3 px-4 font-mono">0.720 kg CO₂e / kWh</td>
                      <td className="py-3 px-4 font-mono">(AC + Appliance kWh) × 0.72 × 7</td>
                      <td className="py-3 px-4 text-slate-400">CEA India Grid Baseline</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-rose-400">Disposables</td>
                      <td className="py-3 px-4">Single-Use Cups / PET Bottles</td>
                      <td className="py-3 px-4 font-mono">0.09 – 0.55 kg CO₂e / day</td>
                      <td className="py-3 px-4 font-mono">Daily factor × 7 days</td>
                      <td className="py-3 px-4 text-slate-400">Cradle-to-Grave Resin & Paper LCA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

