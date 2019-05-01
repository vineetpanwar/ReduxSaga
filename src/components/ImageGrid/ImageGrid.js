import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { loadImages } from '../../actions';
import Stats from '../Stats';

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        console.log(this.props);
        const { images, error, isLoading, loadImages, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <a onClick={this.props.loadImages}>Load More...</a>
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});
const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
)(ImageGrid);
