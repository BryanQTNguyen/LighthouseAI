
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

// SECTION 1: STEM Graduates Over Time Data
// TO EDIT: Modify the values below to reflect real data
const stemGraduatesData = [
{ year: '2012', graduates: 14 },
{ year: '2013', graduates: 14 },
{ year: '2014', graduates: 9 },
{ year: '2015', graduates: 7 },
{ year: '2016', graduates: 7 },
{ year: '2017', graduates: 7 },
{ year: '2018', graduates: 6 },
{ year: '2019', graduates: 5 },
{ year: '2020', graduates: 5 },
{ year: '2021', graduates: 4 },
{ year: '2022', graduates: 5 },
{ year: '2023', graduates: 5 }];


// SECTION 2: Diversity in STEM Data
// TO EDIT: Update percentages based on actual research
const diversityData = [
{ group: 'White', value: 17.1, color: '#64748b' },
{ group: 'Indigenous', value: 23.6, color: '#fbbf24' },
{ group: 'Hispanic/Latino', value: 21.5, color: '#10b981' },
{ group: 'African American', value: 25.2, color: '#3b82f6' },
{ group: 'Asian', value: 12.6, color: '#8b5cf6' }];


// SECTION 3: STEM Job Growth Projections - Multi-line data
// TO EDIT: Adjust projected growth rates over time for multiple fields
const jobGrowthData = [
{ year: '2006', 'CCC': 1.7333333333333300, 'CSU': 5.566666666666670, 'UC': 11.866666666666700 },
{ year: '2010', 'CCC': 2.3000000000000000, 'CSU': 6.266666666666670, 'UC': 14.1 },
{ year: '2015', 'CCC': 3.0, 'CSU': 7.1000000000000000, 'UC': 16.133333333333300 },
{ year: '2017', 'CCC': 3.266666666666670, 'CSU': 7.566666666666670, 'UC': 17.73333333333330 }];



export default function TheData() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 relative overflow-hidden">
      {/* Decorative starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-500" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-1500" />
        <div className="absolute bottom-60 right-16 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-3000" />
        <div className="absolute top-80 left-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-2500" />
        <div className="absolute top-24 left-2/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1200" />
        <div className="absolute bottom-80 right-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-1800" />
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 right-3/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-900" />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2200" />
        <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-3500" />
        <div className="absolute top-10 right-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-400" />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1100" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-2800" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-1600" />
        <div className="absolute bottom-2/3 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1900" />
        <div className="absolute top-[5%] left-[85%] w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-800" />
        <div className="absolute top-[90%] left-[15%] w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-2300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Overall Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 lighthouse-text-glow mb-6">
            The Data Behind the Need
          </h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-slate-300 leading-relaxed">
              Understanding the STEM landscape through data reveals both the tremendous opportunities 
              and persistent challenges that drive Lighthouse's mission.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              These statistics illuminate why personalized, AI-guided pathways are essential for 
              helping students navigate the complex world of STEM education and careers—especially 
              for underrepresented communities who face additional barriers to entry and success.
            </p>
          </div>
        </div>

        {/* Section 1: STEM Graduates Growth */}
        <div className="mb-16">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center pb-6">
              <CardTitle className="tracking-tight text-2xl font-bold text-yellow-400 lighthouse-text-glow">Admit rates plummet for majors like CS

              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={stemGraduatesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="year" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#f1f5f9'
                        }} />

                      <Line
                        type="monotone"
                        dataKey="graduates"
                        stroke="#fbbf24"
                        strokeWidth={3}
                        activeDot={{ r: 6, fill: '#fbbf24', className: 'lighthouse-glow' }} />

                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">Competition Grows

                  </h3>
                  <p className="text-slate-300 leading-relaxed">



                  </p>
                  <p className="text-slate-300 leading-relaxed">STEM majors are highly competitive because so many students apply for them, yet universities only have limited spots. Admit rates for fields like Computer Science and Engineering are often much lower than for other majors, sometimes dropping into the single digits. This fact makes it very difficult for students to initially find STEM all so appealing. 



                  </p>
                  <div className="bg-slate-700 p-4 rounded-lg mt-4">
                    <p className="text-slate-400 text-sm">
                      <strong>Data Source:</strong>{" "}
                      <a
                        href="https://github.com/BryanQTNguyen/LighthouseAI/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline">

                        Github ReadMe
                      </a>
                    </p>
                    <p className="text-blue-400 text-sm mt-2">
                      <a
                        href="https://github.com/BryanQTNguyen/LighthouseAI/tree/main/ColabNotebooks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">

                        📊 View Original Python Analysis Code (Google Colab)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Diversity in STEM */}
        <div className="mb-16">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center pb-6">
              <CardTitle className="tracking-tight text-2xl font-bold text-yellow-400 lighthouse-text-glow">Attrition Proportion by Ethnic Group

              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 lg:order-2">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">The Landscape is different for everyone

                  </h3>
                  <p className="text-slate-300 leading-relaxed">Minority groups in STEM often face lower success rates compared to their peers, due to systemic barriers like limited access to resources, mentorship, and networks. Studies show higher attrition rates and lower degree completion rates among URM students in STEM majors. Bottom line: many students struggle to persist and thrive in STEM without stronger institutional support and inclusion efforts.



                  </p>
                  <p className="text-slate-300 leading-relaxed">




                  </p>
                  <div className="bg-slate-700 p-4 rounded-lg mt-4">
                    <p className="text-slate-400 text-sm">
                      <strong>Data Source:</strong>{" "}
                      <a
                        href="https://github.com/BryanQTNguyen/LighthouseAI/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline">

                        Github ReadMe
                      </a>
                    </p>
                    <p className="text-blue-400 text-sm mt-2">
                      <a
                        href="https://github.com/BryanQTNguyen/LighthouseAI/tree/main/ColabNotebooks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">

                        📊 View Original Python Analysis Code (Google Colab)
                      </a>
                    </p>
                  </div>
                </div>
                <div className="lg:order-1">
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={diversityData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        dataKey="value"
                        label={({ group, value }) => `${group}: ${value}%`}
                        labelLine={false}>

                        {diversityData.map((entry, index) =>
                        <Cell key={`cell-${index}`} fill={entry.color} />
                        )}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#f1f5f9'
                        }} />

                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Job Growth Projections */}
        <div className="mb-16">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center pb-6">
              <CardTitle className="tracking-tight text-2xl font-bold text-yellow-400 lighthouse-text-glow">Underrepresented Minorities (URM) Success Rate

              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={jobGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="year" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: '1px solid #475569',
                          borderRadius: '8px',
                          color: '#f1f5f9'
                        }} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="CCC"
                        stroke="#fbbf24"
                        strokeWidth={3}
                        activeDot={{ r: 6 }} />

                      <Line
                        type="monotone"
                        dataKey="CSU"
                        stroke="#10b981"
                        strokeWidth={3}
                        activeDot={{ r: 6 }} />

                      <Line
                        type="monotone"
                        dataKey="UC"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        activeDot={{ r: 6 }} />

                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">Resources are gate kept by institutions

                  </h3>
                  <p className="text-slate-300 leading-relaxed">URM success rates in STEM can differ widely depending on the institution’s environment and support systems. At schools with strong mentorship, inclusive culture, and resources, URM students often perform much closer to their peers. In contrast, at institutions lacking these supports, gaps in retention and graduation rates are much more pronounced. We need to bridge this rate and bring resources to students in such "lower" institutions. 



                  </p>
                  <p className="text-slate-300 leading-relaxed">



                  </p>
                  <div className="bg-slate-700 p-4 rounded-lg mt-4">
                    <p className="text-slate-400 text-sm">
                      <strong>Data Source:</strong>{" "}
                      <a
                        href="https://github.com/BryanQTNguyen/LighthouseAI/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline">

                        Github ReadMe
                      </a>
                    </p>
                    <p className="text-blue-400 text-sm mt-2">
                      <a
                        href="https://github.com/BryanQTNguyen/LighthouseAI/tree/main/ColabNotebooks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline">

                        📊 View Original Python Analysis Code (Google Colab)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8">
          <h2 className="text-2xl font-bold text-yellow-400 lighthouse-text-glow mb-4">
            The Data is Clear: We Need Better Pathways
          </h2>
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Growing demand, persistent gaps, massive opportunity—but students still struggle to find their way. 
            That's exactly why Lighthouse exists: to turn data into personalized action plans that work.
          </p>
        </div>
      </div>
    </div>);

}