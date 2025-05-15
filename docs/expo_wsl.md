# Lancer Expo sous WSL (Windows Subsystem for Linux)

## Problème courant
- Le terminal WSL affiche le QR code, mais l'URL http://localhost:19002 ne fonctionne pas dans le navigateur Windows.
- Le QR code n'est pas accessible depuis le téléphone en mode LAN.

## Solution recommandée : Mode Tunnel

1. **Arrêter Expo si besoin**
   ```bash
   Ctrl+C
   ```
2. **Lancer Expo en mode Tunnel**
   ```bash
   npx expo start --tunnel
   ```
3. **Ouvrir l'interface web Expo**
   - Expo affiche une URL (souvent http://localhost:19002 ou une URL en tunnel comme https://exp.host/@...)
   - Ouvre cette URL dans ton navigateur Windows (pas dans WSL)

4. **Scanner le QR code**
   - Utilise l'application Expo Go sur ton téléphone
   - Le mode Tunnel permet de contourner les soucis de réseau entre WSL et ton mobile

## Astuces supplémentaires
- Si le port 19002 ne fonctionne pas, vérifie le firewall Windows.
- Préfère toujours le mode Tunnel sous WSL pour éviter les problèmes de réseau.
- Si besoin, utilise l'URL en tunnel fournie par Expo dans l'interface web.

---

**Résumé** :
- Toujours lancer Expo avec `npx expo start --tunnel` sous WSL
- Ouvrir l'URL dans le navigateur Windows
- Scanner le QR code avec Expo Go 