import { View, Text, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur votre Carnet de Santé Numérique !</Text>
      
      {/* Bouton pour naviguer vers l'écran de profil */}
      <Link href="/profile" asChild>
        <Button title="Accéder au Profil" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Couleur de fond
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Couleur du texte
  },
});
