import React from 'react';
import './Terms.css';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Welcome to Basketdayo</h1>
      <p>
        By accessing or using our application, you agree to comply with and be bound by these terms and conditions. Please read them carefully.
      </p>

      <section className="terms-section">
        <h2>1. Bawal Ang Pustahan</h2>
        <p>
        Mahigpit na ipinagbabawal ang anumang uri ng sugal sa mga scheduled pickup games. ang mga players na mahuhuling nagsususgal ay maaring magmulta ng 100 pesos sa 1st offense, 200 sa second offense, at 300 pesos sa third offense . kapag lumagpas na sa 3 offense ang player ay maari ito magresulta sa pagkaban nito sa mga pickup games.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. No Pay No Play</h2>
        <p>
        Bago maglaro kailangan muna magbayad ng kada players na lalaro sa pickup games .
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Bawal ang Mag Away</h2>
        <p>
          Ang Pakikipag away ay mahigpit na ipinagbabawal sa mga scheduled na pickup games . ang mga players na masasangkot sa away ay maari magmulta ng 100 pesos sa first offense , 200 pesos sa second offense, at 300 pesos sa third offense.kapag lumagpas na sa 3 offense ang player ay maari ito magresulta sa pagkaban nito sa mga pickup games
        </p>
      </section>

      <section className="terms-section">
      <h2>4. Play at your own risk</h2>
      <p>
           Ang management ay walang pananagutan sa anumang aksidenteng mangyari sa mga scheduled pickup games . ang mga players ay dapat maging responsable sa kanilang sariling aksyon at kaligtasan.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Protect your valubale Belongings</h2>
        <p>
          Ang Management ay walang pananagutan sa mga gamit na nawawala at dapat maging responsable ang mga players sa kanilang personal na gamit 
        </p>
      </section>

      
      <section className="terms-section">
        <h2>6. Contact Us</h2>
        <p>
          kung kayo ay my katanungan tungkol sa mga rules , maaring kontakin ang  <a href="kobeho3212@gmail.com">kobeho3212@gmail.com</a>.
        </p>
      </section>

      <div className="navigation-links">
        <Link to="/" className="btn btn-primary">Back to Login</Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
