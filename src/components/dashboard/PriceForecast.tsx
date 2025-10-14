import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download } from "lucide-react";

const forecastData = [
  { date: "Week 1", actual: 452, forecast: 450, upper: 460, lower: 440 },
  { date: "Week 2", actual: 448, forecast: 447, upper: 457, lower: 437 },
  { date: "Week 3", actual: 455, forecast: 453, upper: 463, lower: 443 },
  { date: "Week 4", actual: null, forecast: 458, upper: 468, lower: 448 },
  { date: "Week 5", actual: null, forecast: 462, upper: 472, lower: 452 },
  { date: "Week 6", actual: null, forecast: 459, upper: 469, lower: 449 },
  { date: "Week 7", actual: null, forecast: 455, upper: 465, lower: 445 },
  { date: "Week 8", actual: null, forecast: 451, upper: 461, lower: 441 },
];

const candlestickData = [
  { date: "Mon", open: 448, high: 454, low: 446, close: 452 },
  { date: "Tue", open: 452, high: 456, low: 449, close: 451 },
  { date: "Wed", open: 451, high: 458, low: 450, close: 455 },
  { date: "Thu", open: 455, high: 459, low: 453, close: 457 },
  { date: "Fri", open: 457, high: 461, low: 455, close: 458 },
];

const PriceForecast = () => {
  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Forecast Controls</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Horizon</label>
              <Select defaultValue="8weeks">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4weeks">4 Weeks</SelectItem>
                  <SelectItem value="8weeks">8 Weeks</SelectItem>
                  <SelectItem value="12weeks">12 Weeks</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Risk Tolerance</label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confidence Level</label>
              <Select defaultValue="90">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="80">80%</SelectItem>
                  <SelectItem value="90">90%</SelectItem>
                  <SelectItem value="95">95%</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Forecast Chart */}
      <Card>
        <CardHeader>
          <CardTitle>8-Week Price Forecast with Confidence Intervals</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis className="text-xs" domain={[430, 480]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                name="Actual Price"
                dot={{ fill: 'hsl(var(--chart-1))' }}
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Forecast"
                dot={{ fill: 'hsl(var(--chart-2))' }}
              />
              <Line 
                type="monotone" 
                dataKey="upper" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={1}
                strokeDasharray="3 3"
                name="Upper Bound"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="lower" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={1}
                strokeDasharray="3 3"
                name="Lower Bound"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Price Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="h-2 w-2 rounded-full bg-success mt-2"></div>
              <div>
                <p className="text-sm font-medium">Price Dip Expected</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Forecast shows 3.5% decrease in weeks 6-7, optimal buying window
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="h-2 w-2 rounded-full bg-warning mt-2"></div>
              <div>
                <p className="text-sm font-medium">Volatility Alert</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Higher variance expected in weeks 4-5 due to seasonal factors
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
              <div>
                <p className="text-sm font-medium">Long-term Trend</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Overall downward trend anticipated, favorable for procurement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Price Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Price</span>
              <span className="text-lg font-bold">$458.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Forecasted Low (8 weeks)</span>
              <span className="text-lg font-bold text-success">$451.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Forecasted High (8 weeks)</span>
              <span className="text-lg font-bold text-destructive">$462.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Avg. Weekly Change</span>
              <span className="text-lg font-bold">-0.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Confidence Interval</span>
              <span className="text-lg font-bold">±$10.00</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PriceForecast;
