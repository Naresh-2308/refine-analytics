import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";
import { TrendingUp, Package, Truck, AlertCircle } from "lucide-react";

const supplyData = [
  { month: "Jan", inventory: 12500, incoming: 8000, forecast: 11000 },
  { month: "Feb", inventory: 11200, incoming: 7500, forecast: 10500 },
  { month: "Mar", inventory: 10800, incoming: 9000, forecast: 11200 },
  { month: "Apr", inventory: 13000, incoming: 8500, forecast: 12000 },
  { month: "May", inventory: 12800, incoming: 7800, forecast: 11500 },
  { month: "Jun", inventory: 11500, incoming: 9200, forecast: 12200 },
];

const supplierData = [
  { supplier: "Supplier A", reliability: 98, volume: 45 },
  { supplier: "Supplier B", reliability: 94, volume: 30 },
  { supplier: "Supplier C", reliability: 96, volume: 25 },
];

const SupplyForecast = () => {
  return (
    <div className="space-y-6">
      {/* Supply Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Inventory</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11,500 MT</div>
            <p className="text-xs text-muted-foreground">Metric Tons in storage</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incoming Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9,200 MT</div>
            <p className="text-xs text-muted-foreground">Expected this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supply Risk Level</CardTitle>
            <AlertCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Low</div>
            <p className="text-xs text-muted-foreground">Adequate buffer maintained</p>
          </CardContent>
        </Card>
      </div>

      {/* Supply Forecast Chart */}
      <Card>
        <CardHeader>
          <CardTitle>6-Month Supply & Inventory Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={supplyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }} 
              />
              <Legend />
              <Bar dataKey="inventory" fill="hsl(var(--chart-1))" name="Current Inventory" />
              <Bar dataKey="incoming" fill="hsl(var(--chart-2))" name="Incoming Supply" />
              <Bar dataKey="forecast" fill="hsl(var(--chart-3))" name="Forecasted Need" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Supplier Reliability */}
        <Card>
          <CardHeader>
            <CardTitle>Supplier Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {supplierData.map((supplier) => (
              <div key={supplier.supplier} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{supplier.supplier}</span>
                  <span className="text-sm text-muted-foreground">{supplier.volume}% of volume</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-success" 
                      style={{ width: `${supplier.reliability}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{supplier.reliability}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Supply Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Supply Chain Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="h-2 w-2 rounded-full bg-success mt-2"></div>
              <div>
                <p className="text-sm font-medium">Supplier A Delivery On Track</p>
                <p className="text-xs text-muted-foreground mt-1">
                  4,500 MT arriving June 15th as scheduled
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
              <div>
                <p className="text-sm font-medium">Seasonal Demand Increase</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Expected 15% uptick in Q3, adjust procurement accordingly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="h-2 w-2 rounded-full bg-warning mt-2"></div>
              <div>
                <p className="text-sm font-medium">Port Congestion Alert</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Minor delays possible at Port B, buffer time recommended
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplyForecast;
