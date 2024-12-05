import React,{useState} from 'react'

const slides = [
    {
      title: 'First Slide',
      image: 'https://placehold.co/600x400/orange/white?text=Slide%201',
    },
    {
      title: 'Second Slide',
      image: 'https://placehold.co/600x400/red/white?text=Slide%202',
    },
    {
      title: 'Third Slide',
      image: 'https://placehold.co/600x400/orange/white?text=Slide%203',
    },
    {
      title: 'Last Slide',
      image: 'https://placehold.co/600x400/black/white?text=Slide%204',
    },
  ];

const SlideShow = () => {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      if (current > 0) {
        setCurrent(current - 1);
      }
    };
  
    const handleNext = () => {
      if (current < slides.length - 1) {
        setCurrent(current + 1);
      }
    };
  
    const handleReset = () => {
      setCurrent(0);
    };
    return (
      <div>
        <h2>{slides[current]?.title || 'title'}</h2>
        <img
          src={slides[current]?.image || ' '}
          alt={slides[current]?.title || ' '}
        />
        <br />
        <div
          style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}
        >
          <button
            data-testid="prev-button"
            onClick={handlePrev}
            disabled={current === 0}
          >
            Prev
          </button>
          <button data-testid="reset-button"   disabled={current === 0} onClick={handleReset}>
            Reset
          </button>
          <button
            data-testid="next-button"
            onClick={handleNext}
            disabled={current === slides.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    );
  
}

export default SlideShow