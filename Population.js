// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

//SOL:

function nbYear(p0, percent, aug, p) {
    let nb_year=1;
    let ptotal=0;
      for (var i=0;;i++){
        ptotal=p0+(p0*(percent/100))+aug;
        if(Math.round(ptotal)>=p)
          return nb_year;
        else
          nb_year+=1;
          p0=ptotal;
      }
  }