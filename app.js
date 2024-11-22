// Constructor function to create HostingPlan objects
function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

// Create Hosting Plans
const basicPlan = new HostingPlan(
    "Basic",
    5,
    ["10GB Storage", "100GB Bandwidth", "1 Domain"],
    "Email Support"
);

const proPlan = new HostingPlan(
    "Pro",
    15,
    ["50GB Storage", "500GB Bandwidth", "5 Domains"],
    "Email + Phone Support"
);

const businessPlan = new HostingPlan(
    "Business",
    25,
    ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"],
    "24/7 Support"
);

// Function to display confirmation modal
function buyPlan(planName, price) {
    const modal = document.getElementById("confirmation-modal");
    const message = `You have selected the ${planName} Plan for $${price}/month.`;
    document.getElementById("confirmation-message").textContent = message;
    modal.style.display = "block";
}

// Function to close the confirmation modal
function closeModal() {
    const modal = document.getElementById("confirmation-modal");
    modal.style.display = "none";
}

// Close modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("confirmation-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
