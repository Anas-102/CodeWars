// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

//SOL:

function ipsBetween(start, end) {
    // Convert IPv4 addresses to numerical representations
    const startParts = start.split(".").map(Number);
    const endParts = end.split(".").map(Number);
  
    // Calculate the difference between the numerical representations
    let difference = 0;
    for (let i = 0; i < 4; i++) {
      difference = difference * 256 + (endParts[i] - startParts[i]);
    }
  
    return difference;
  }