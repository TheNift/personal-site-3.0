import chairFile from '@assets/models/chair.glb';
import deskFile from '@assets/models/desk.glb';
import keyboardFile from '@assets/models/keyboard.glb';
import monitorFile from '@assets/models/monitor.glb';
import mouseFile from '@assets/models/mouse.glb';
import phoneFile from '@assets/models/phone.glb';
import plantFile from '@assets/models/plant.glb';
import shelfFile from '@assets/models/shelf.glb';
import sv650File from '@assets/models/sv650.glb';

export const ASSETS = {
  chair: chairFile,
  desk: deskFile,
  keyboard: keyboardFile,
  monitor: monitorFile,
  mouse: mouseFile,
  phone: phoneFile,
  plant: plantFile,
  shelf: shelfFile,
  motorcycle: sv650File,
} as const;

export type AssetKey = keyof typeof ASSETS;

export const getAssetPath = (key: AssetKey): string => ASSETS[key];

export const getAllAssetPaths = (): string[] => Object.values(ASSETS);
