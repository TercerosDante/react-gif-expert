export const getRandomEffect = () => {
  const animateEffects = [
    'animate__slideInLeft',
    'animate__slideInDown',
    'animate__slideInRight',
    'animate__zoomIn',
    'animate__zoomInDown',
    'animate__lightSpeedInLeft',
    'animate__fadeInDown',
    'animate__bounceIn'
  ];
  const index = Math.floor(Math.random() * (animateEffects.length + 1));
  return animateEffects[index];
}
