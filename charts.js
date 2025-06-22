
// Chart configurations and drawing functions using p5.js

// Expenses Chart (Circular Progress)
function expensesChart(p) {
    p.setup = function() {
        p.createCanvas(160, 160);
        p.angleMode(p.DEGREES);
    };
    
    p.draw = function() {
        p.background(255);
        p.strokeWeight(10);
        p.noFill();
        
        // Background circle
        p.stroke(240, 240, 240);
        p.circle(80, 80, 100);
        
        // Progress arc (27%)
        p.stroke(239, 68, 68); // Indigo
        p.arc(80, 80, 100, 100, -90, -90 + (360 * 0.67));
        
        // Center text
        p.fill(17, 24, 39);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(18);
        p.text('67%', 80, 80);
    };
}

// Inventory Chart (Bar Chart)
function inventoryChart(p) {
    p.setup = function() {
        p.createCanvas(360, 150);
    };
    
    p.draw = function() {
        p.background(255);
        
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const values = [65, 45, 80, 55, 70, 40, 85];
        const barWidth = 35;
        const spacing = 42;
        const maxHeight = 100;
        
        for (let i = 0; i < days.length; i++) {
            const x = 25 + i * spacing;
            const barHeight = (values[i] / 100) * maxHeight;
            const y = 120 - barHeight;
            
            // Bar
            p.fill(59, 130, 246); // Blue
            p.noStroke();
            p.rect(x, y, barWidth, barHeight, 2);
            
            // Day label
            p.fill(107, 114, 128);
            p.textAlign(p.CENTER);
            p.textSize(12);
            p.text(days[i], x + barWidth/2, 140);
        }
    };
}

// Turnover Chart (Donut Chart)
function turnoverChart(p) {
    p.setup = function() {
        p.createCanvas(160, 160);
        p.angleMode(p.DEGREES);
    };
    
    p.draw = function() {
        p.background(255);
        p.strokeWeight(12);
        p.noFill();
        
        // Background circle
        p.stroke(240, 240, 240);
        p.circle(80, 80, 100);
        
        // Add outer grey circle
        p.stroke(240, 240, 240); // Light Grey
        p.strokeWeight(10);
        p.circle(80, 80, 100);

        // Used portion (13%)
        p.stroke(239, 68, 68); // Red
        p.strokeWeight(14);
        p.arc(80, 80, 100, 100, -90, -90 + (360 * 0.13));

        // Add green arc for produced items (e.g., 40%)
        const producedPercentage = 0.40; // Example percentage
        p.stroke(255, 204, 0); // Yellow
        p.strokeWeight(14);
        p.arc(80, 80, 100, 100, -90, -90 + (360 * producedPercentage));

        // Center text - display percentages
        p.fill(17, 24, 39);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(14);
        p.text('13% Used', 80, 80);
    };
}

// Monthly Analytics Chart (Bar Chart)
function monthlyChart(p) {
    p.setup = function() {
        p.createCanvas(600, 256);
    };
    
    p.draw = function() {
        p.background(255);
        
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const values = [15, 22, 18, 30, 25, 28, 20, 35, 32, 28, 25, 30]; // in thousands
        const barWidth = 35;
        const spacing = 45;
        const maxHeight = 180;
        
        // Draw grid lines
        p.stroke(240, 240, 240);
        p.strokeWeight(1);
        for (let i = 0; i <= 6; i++) {
            const y = 200 - (i * 30);
            p.line(40, y, 580, y);
            
            // Y-axis labels
            p.fill(107, 114, 128);
            p.noStroke();
            p.textAlign(p.RIGHT);
            p.textSize(10);
            p.text('$' + (i * 5) + 'K', 35, y + 3);
        }
        
        // Draw bars
        for (let i = 0; i < months.length; i++) {
            const x = 50 + i * spacing;
            const barHeight = (values[i] / 35) * maxHeight;
            const y = 200 - barHeight;
            
            // Bar
            p.fill(59, 130, 246); // Blue
            p.noStroke();
            p.rect(x, y, barWidth, barHeight, 2);
            
            // Month label
            p.fill(107, 114, 128);
            p.textAlign(p.CENTER);
            p.textSize(10);
            p.text(months[i], x + barWidth/2, 220);
        }
    };
}

// Initialize all charts
window.addEventListener('load', function() {
    new p5(expensesChart, 'expenses-chart');
    new p5(inventoryChart, 'inventory-chart');
    new p5(turnoverChart, 'turnover-chart');
    new p5(monthlyChart, 'monthly-chart');
});
    