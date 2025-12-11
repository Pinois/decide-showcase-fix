#!/bin/bash
# Script pour télécharger les images des ateliers depuis Unsplash
# Exécuter depuis la racine du projet: ./scripts/download-workshop-images.sh

ASSETS_DIR="packages/themes/src/Startup/assets"

echo "Téléchargement des images des ateliers..."

curl -sL "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop" -o "$ASSETS_DIR/workshop-fresque.jpg"
echo "✓ workshop-fresque.jpg (Fresque du Climat)"

curl -sL "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop" -o "$ASSETS_DIR/workshop-nudge.jpg"
echo "✓ workshop-nudge.jpg (Nudge)"

curl -sL "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" -o "$ASSETS_DIR/workshop-mobiliser.jpg"
echo "✓ workshop-mobiliser.jpg (Mobiliser ses collègues)"

curl -sL "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" -o "$ASSETS_DIR/workshop-numerique.jpg"
echo "✓ workshop-numerique.jpg (Numérique)"

curl -sL "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop" -o "$ASSETS_DIR/workshop-evenements.jpg"
echo "✓ workshop-evenements.jpg (Événements durables)"

echo ""
echo "Terminé ! N'oublie pas de mettre à jour data.jsx pour utiliser ces images locales."
echo ""
echo "Remplacer dans packages/themes/src/Startup/data.jsx :"
echo "  'https://images.unsplash.com/photo-1611273426858...' → import WorkshopFresque from './assets/workshop-fresque.jpg'"
echo "  etc."
