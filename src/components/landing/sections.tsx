import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#FFD700] border-[#FFD700]">Только для хардкорщиков</Badge>,
    title: "Топ сложнейших уровней Geometry Dash.",
    showButton: true,
    buttonText: 'Смотреть список'
  },
  {
    id: 'top1',
    title: '#1 — Thinking Space II',
    content: 'Продолжение культового Thinking Space — плотная механика, безумный дизайн и нулевой порог прощения. Один из самых технически требовательных уровней на вершине Demon List.',
    bgImage: 'https://avatars.mds.yandex.net/i?id=7495317229b79e1ff391c2f7fafb8594_l-8228018-images-thumbs&n=13'
  },
  {
    id: 'top2',
    title: '#2 — Amethyst',
    content: 'Ошеломляющий визуал в пурпурных тонах скрывает одну из жесточайших механик среди экстремальных демонов. Каждый сегмент — испытание на точность и выносливость.',
    bgImage: 'https://avatars.mds.yandex.net/i?id=15f5ebbfd78facb052d9e9ef92ae7b28_l-4432907-images-thumbs&n=13'
  },
  {
    id: 'top3',
    title: '#3 — Flamewall',
    content: 'Огненный ад из непрерывных волн и стен. Flamewall давит на игрока без передышки — здесь нет места ошибкам, только реакция и сотни часов тренировок.',
    bgImage: 'https://avatars.mds.yandex.net/i?id=48015ece7b1ef34d4ca90369ebc224e0_l-12827323-images-thumbs&n=13'
  },
  {
    id: 'top4',
    title: '#4 — Tidal Wave',
    content: 'Легендарный коллаб-демон, покоривший сообщество. Gigantic wave-сегменты на предельной скорости делают Tidal Wave одним из самых знаменитых уровней в истории GD.',
    bgImage: 'https://avatars.mds.yandex.net/i?id=43d8ea47b405703d98e30c72183ade25_l-5666076-images-thumbs&n=13'
  },
  {
    id: 'top5',
    title: '#5 — ORBIT',
    content: 'Космическая эстетика и безжалостная сложность в одном уровне. ORBIT требует абсолютного контроля на протяжении всего прохождения — ни секунды расслабления.',
    bgImage: 'https://avatars.mds.yandex.net/i?id=9256ead3aec50964d124ded9f1cab72a_sr-2436415-images-thumbs&n=13'
  },
  {
    id: 'cta',
    title: 'Готов принять вызов?',
    content: 'Эти уровни — не просто игра. Это испытание воли, реакции и терпения. Тысячи часов практики отделяют тебя от легенды.',
    showButton: true,
    buttonText: 'Полный рейтинг',
    buttonUrl: 'https://demonlist.org'
  },
]